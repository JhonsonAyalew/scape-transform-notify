from celery import Celery
import os

celery = Celery('worker', broker=os.getenv('CELERY_BROKER_URL', 'redis://redis:6379/0'))
