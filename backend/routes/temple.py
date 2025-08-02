from fastapi import APIRouter, HTTPException, Depends
from typing import List, Optional
from datetime import datetime
import os
from motor.motor_asyncio import AsyncIOMotorClient
from models.temple import (
    TempleInfo, SpecialDay, Photo, Seva, SevaBooking, 
    ContactSubmission, Testimonial, Newsletter, PyObjectId
)

# Database connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

router = APIRouter()

# Temple Information
@router.get("/temple-info", response_model=TempleInfo)
async def get_temple_info():
    temple_info = await db.temple_info.find_one()
    if temple_info:
        return TempleInfo(**temple_info)
    
    # Return default temple info if not in database
    default_info = {
        "name": "Sri Kundeshwara Swamy Shiva Temple",
        "location": "Kundapur, Karnataka",
        "distance": "1.5 kilometers from Kundapur city",
        "description": "Sri Kundeshwara Swamy Shiva Temple is located at a distance of about 1.5 kilometers away from the city of Kundapur. This lies on the coastal area of Karnataka and overlooks a scenic beauty in the lap of nature. This temple is dedicated to Lord Shiva who is worshipped here in the form of Lord Kundeshwara.",
        "contact": {
            "phone": "0820 258 4176",
            "email": "info@kundeshwaratemple.org",
            "address": "Kundeshwara Temple, Kundapur, Udupi District, Karnataka 576201"
        },
        "timings": {
            "morning": "5:30 AM - 12:30 PM",
            "evening": "4:00 PM - 8:30 PM"
        }
    }
    return TempleInfo(**default_info)

# Special Days / Events
@router.get("/special-days", response_model=List[SpecialDay])
async def get_special_days(active_only: bool = True):
    query = {"is_active": True} if active_only else {}
    special_days = await db.special_days.find(query).to_list(100)
    return [SpecialDay(**day) for day in special_days]

@router.post("/special-days", response_model=SpecialDay)
async def create_special_day(special_day: SpecialDay):
    special_day_dict = special_day.dict(by_alias=True, exclude_unset=True)
    result = await db.special_days.insert_one(special_day_dict)
    created_day = await db.special_days.find_one({"_id": result.inserted_id})
    return SpecialDay(**created_day)

@router.put("/special-days/{day_id}", response_model=SpecialDay)
async def update_special_day(day_id: str, special_day: SpecialDay):
    special_day.updated_at = datetime.utcnow()
    special_day_dict = special_day.dict(by_alias=True, exclude_unset=True)
    del special_day_dict["_id"]
    
    result = await db.special_days.update_one(
        {"_id": PyObjectId(day_id)}, 
        {"$set": special_day_dict}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Special day not found")
    
    updated_day = await db.special_days.find_one({"_id": PyObjectId(day_id)})
    return SpecialDay(**updated_day)

# Photo Gallery
@router.get("/gallery", response_model=List[Photo])
async def get_gallery(category: Optional[str] = None, active_only: bool = True):
    query = {"is_active": True} if active_only else {}
    if category and category != "All":
        query["category"] = category
    
    photos = await db.photos.find(query).to_list(100)
    return [Photo(**photo) for photo in photos]

@router.post("/gallery", response_model=Photo)
async def add_photo(photo: Photo):
    photo_dict = photo.dict(by_alias=True, exclude_unset=True)
    result = await db.photos.insert_one(photo_dict)
    created_photo = await db.photos.find_one({"_id": result.inserted_id})
    return Photo(**created_photo)

# Seva Services
@router.get("/seva", response_model=List[Seva])
async def get_seva_list(available_only: bool = True):
    query = {"is_available": True} if available_only else {}
    seva_list = await db.seva.find(query).to_list(100)
    return [Seva(**seva) for seva in seva_list]

@router.post("/seva", response_model=Seva)
async def create_seva(seva: Seva):
    seva_dict = seva.dict(by_alias=True, exclude_unset=True)
    result = await db.seva.insert_one(seva_dict)
    created_seva = await db.seva.find_one({"_id": result.inserted_id})
    return Seva(**created_seva)

# Seva Booking
@router.post("/seva-booking", response_model=SevaBooking)
async def book_seva(booking: SevaBooking):
    # Verify seva exists
    seva = await db.seva.find_one({"_id": booking.seva_id})
    if not seva:
        raise HTTPException(status_code=404, detail="Seva not found")
    
    booking_dict = booking.dict(by_alias=True, exclude_unset=True)
    result = await db.seva_bookings.insert_one(booking_dict)
    created_booking = await db.seva_bookings.find_one({"_id": result.inserted_id})
    return SevaBooking(**created_booking)

@router.get("/seva-booking/{booking_id}", response_model=SevaBooking)
async def get_seva_booking(booking_id: str):
    booking = await db.seva_bookings.find_one({"_id": PyObjectId(booking_id)})
    if not booking:
        raise HTTPException(status_code=404, detail="Booking not found")
    return SevaBooking(**booking)

# Contact Form
@router.post("/contact", response_model=ContactSubmission)
async def submit_contact_form(contact: ContactSubmission):
    contact_dict = contact.dict(by_alias=True, exclude_unset=True)
    result = await db.contact_submissions.insert_one(contact_dict)
    created_contact = await db.contact_submissions.find_one({"_id": result.inserted_id})
    
    # TODO: Send email notification to temple admin
    
    return ContactSubmission(**created_contact)

@router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions(status: Optional[str] = None):
    query = {"status": status} if status else {}
    submissions = await db.contact_submissions.find(query).sort("created_at", -1).to_list(100)
    return [ContactSubmission(**submission) for submission in submissions]

# Testimonials
@router.get("/testimonials", response_model=List[Testimonial])
async def get_testimonials(approved_only: bool = True):
    query = {"is_approved": True} if approved_only else {}
    testimonials = await db.testimonials.find(query).sort("created_at", -1).to_list(50)
    return [Testimonial(**testimonial) for testimonial in testimonials]

@router.post("/testimonials", response_model=Testimonial)
async def submit_testimonial(testimonial: Testimonial):
    testimonial_dict = testimonial.dict(by_alias=True, exclude_unset=True)
    result = await db.testimonials.insert_one(testimonial_dict)
    created_testimonial = await db.testimonials.find_one({"_id": result.inserted_id})
    return Testimonial(**created_testimonial)

# Newsletter
@router.post("/newsletter/subscribe")
async def subscribe_newsletter(email: str):
    # Check if already subscribed
    existing = await db.newsletter.find_one({"email": email})
    if existing:
        if existing.get("is_active", False):
            return {"message": "Email already subscribed"}
        else:
            # Reactivate subscription
            await db.newsletter.update_one(
                {"email": email},
                {"$set": {"is_active": True, "subscribed_at": datetime.utcnow()}}
            )
            return {"message": "Subscription reactivated successfully"}
    
    # New subscription
    newsletter = Newsletter(email=email)
    newsletter_dict = newsletter.dict(by_alias=True, exclude_unset=True)
    await db.newsletter.insert_one(newsletter_dict)
    return {"message": "Successfully subscribed to newsletter"}

@router.post("/newsletter/unsubscribe")
async def unsubscribe_newsletter(email: str):
    result = await db.newsletter.update_one(
        {"email": email},
        {"$set": {"is_active": False, "unsubscribed_at": datetime.utcnow()}}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Email not found in newsletter")
    
    return {"message": "Successfully unsubscribed from newsletter"}