import requests
import json

from bs4 import BeautifulSoup

DATA = []
with open('dataParser/ann.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

    for ann in soup.select('.item'):
        date_created = ann.select_one('h5').text
        title = ann.select_one('h3').text
        text = ann.select_one('p').text
        link = ann.select_one('p a')['href']

        DATA.append({
            'title': title,
            'text': text,
            'thumbnail': '',
            'link': link,
            'date_created': date_created
        })

with open('announcements.json', 'w', encoding='utf-8') as f:
    json.dump(DATA, f, indent=2)