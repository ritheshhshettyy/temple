import asyncio
import os
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime

async def initialize_temple_data():
    """Initialize the database with temple data from mock"""
    
    # Database connection
    mongo_url = os.environ['MONGO_URL']
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ['DB_NAME']]
    
    # Clear existing data
    await db.special_days.delete_many({})
    await db.photos.delete_many({})
    await db.seva.delete_many({})
    await db.testimonials.delete_many({})
    
    print("Cleared existing data...")
    
    # Initialize Special Days
    special_days = [
        {
            "name": "Kundeswara Deepotsav",
            "description": "The main and the biggest festival which is celebrated in the Sri Kundeshwara Swamy Shiva Temple. This is celebrated on a grand scale which attracts thousands of people. The mornings begin with special rituals and puja's adhering to the principles of Veda's. In the evening various kinds of events are organized such as song, dance and drama competition.",
            "date": "Annual Festival",
            "image": "https://images.unsplash.com/photo-1715876722520-02ccc9248dab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxoaW5kdSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3NDF8MA&ixlib=rb-4.1.0&q=85",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Mahashivratri",
            "description": "Mahashivratri is also held here with great pomp and grandeur. Special rituals and prayers are performed throughout the night dedicated to Lord Shiva.",
            "date": "February/March (as per lunar calendar)",
            "image": "https://images.unsplash.com/photo-1566890910598-c5768889e83e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxzaGl2YSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3MzN8MA&ixlib=rb-4.1.0&q=85",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Ekadashi",
            "description": "Special rituals are performed on Ekadashi days. Devotees observe fasting and offer special prayers to Lord Shiva.",
            "date": "Monthly (11th day of lunar fortnight)",
            "image": "https://images.unsplash.com/photo-1616308913689-cb92c5bea67e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxzaGl2YSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3MzN8MA&ixlib=rb-4.1.0&q=85",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Poornima",
            "description": "Full moon days are considered auspicious for worship at the temple. Special prayers and offerings are made to Lord Shiva.",
            "date": "Monthly (Full Moon Day)",
            "image": "https://images.unsplash.com/photo-1566300141301-ab0577dcba1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxoaW5kdSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3NDF8MA&ixlib=rb-4.1.0&q=85",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Monday Fasting",
            "description": "Keeping a fast and offering milk to the lingams on Mondays is considered very sacred, especially for those seeking life partners. Girls observe fast on sixteen Mondays of the Saavan months.",
            "date": "Every Monday",
            "image": "https://images.unsplash.com/photo-1676807446470-2cd3052649de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxzaGl2YSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3MzN8MA&ixlib=rb-4.1.0&q=85",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    await db.special_days.insert_many(special_days)
    print(f"Inserted {len(special_days)} special days...")
    
    # Initialize Photo Gallery
    photos = [
        {
            "title": "Main Temple Architecture",
            "description": "Beautiful view of the main temple structure",
            "image": "https://images.unsplash.com/photo-1565195161077-f5c5f61f9ea2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwxfHxoaW5kdSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3NDF8MA&ixlib=rb-4.1.0&q=85",
            "category": "Architecture",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Lord Shiva Statue",
            "description": "Magnificent statue of Lord Shiva",
            "image": "https://images.unsplash.com/photo-1558659616-7742131dcfbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxzaGl2YSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3MzN8MA&ixlib=rb-4.1.0&q=85",
            "category": "Deities",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Nandi Statue",
            "description": "Sacred Nandi bull statue at the temple",
            "image": "https://images.unsplash.com/photo-1676807446470-2cd3052649de?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxzaGl2YSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3MzN8MA&ixlib=rb-4.1.0&q=85",
            "category": "Deities",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Temple Interior",
            "description": "Interior view of the sanctum sanctorum",
            "image": "https://images.unsplash.com/photo-1616308913689-cb92c5bea67e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxzaGl2YSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3MzN8MA&ixlib=rb-4.1.0&q=85",
            "category": "Interior",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Evening Temple View",
            "description": "Temple illuminated during evening hours",
            "image": "https://images.unsplash.com/photo-1715876722520-02ccc9248dab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHwyfHxoaW5kdSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3NDF8MA&ixlib=rb-4.1.0&q=85",
            "category": "Architecture",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Temple Reflection",
            "description": "Beautiful temple reflection in water",
            "image": "https://images.pexels.com/photos/87777/india-temple-water-mirroring-87777.jpeg",
            "category": "Nature",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Night View",
            "description": "Temple beautifully lit at night",
            "image": "https://images.unsplash.com/photo-1566300141301-ab0577dcba1c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDJ8MHwxfHNlYXJjaHw0fHxoaW5kdSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3NDF8MA&ixlib=rb-4.1.0&q=85",
            "category": "Architecture",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Peaceful Surroundings",
            "description": "Serene environment around the temple",
            "image": "https://images.unsplash.com/photo-1566890910598-c5768889e83e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxzaGl2YSUyMHRlbXBsZXxlbnwwfHx8fDE3NTQxMjk3MzN8MA&ixlib=rb-4.1.0&q=85",
            "category": "Nature",
            "is_active": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    await db.photos.insert_many(photos)
    print(f"Inserted {len(photos)} photos...")
    
    # Initialize Seva List
    seva_list = [
        {
            "name": "Abhishekam",
            "description": "Sacred ablution ceremony for Lord Shiva",
            "price": "₹501",
            "duration": "30 minutes",
            "is_available": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Rudrabhishekam",
            "description": "Special Rudra prayer with sacred ablution",
            "price": "₹1151",
            "duration": "1 hour",
            "is_available": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Satyanarayana Pooja",
            "description": "Complete Satyanarayana worship ceremony",
            "price": "₹2001",
            "duration": "2 hours",
            "is_available": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Kalabhishekam",
            "description": "Early morning special ablution",
            "price": "₹751",
            "duration": "45 minutes",
            "is_available": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Archana",
            "description": "108 names chanting with flowers",
            "price": "₹201",
            "duration": "15 minutes",
            "is_available": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Deepa Aradhana",
            "description": "Oil lamp worship ceremony",
            "price": "₹351",
            "duration": "20 minutes",
            "is_available": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    await db.seva.insert_many(seva_list)
    print(f"Inserted {len(seva_list)} seva services...")
    
    # Initialize Testimonials
    testimonials = [
        {
            "name": "Rajesh Kumar",
            "location": "Mangalore",
            "message": "The peaceful atmosphere and spiritual energy at Kundeshwara Temple is truly divine. My family visits here regularly for prayers.",
            "rating": 5,
            "is_approved": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Priya Sharma",
            "location": "Udupi",
            "message": "The unique black stone Shiva linga and the temple's architecture are breathtaking. A must-visit spiritual destination.",
            "rating": 5,
            "is_approved": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "name": "Mohan Pai",
            "location": "Kundapur",
            "message": "Being a local, I've grown up visiting this temple. The Kundeswara Deepotsav festival is absolutely magnificent.",
            "rating": 5,
            "is_approved": True,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]
    
    await db.testimonials.insert_many(testimonials)
    print(f"Inserted {len(testimonials)} testimonials...")
    
    print("✅ Database initialization completed successfully!")
    
    client.close()

if __name__ == "__main__":
    asyncio.run(initialize_temple_data())