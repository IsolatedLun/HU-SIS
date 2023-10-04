import json
from bs4 import BeautifulSoup

def clean_text(text: str):
    return text.replace('\n', '').strip()

def parse_days(days: str):
    _days = []
    if '/' in days:
        _days.extend([parse_days(x) for x in days.split('/')])
        return _days

    for i, ch in enumerate(days):
        if ch == 'H':
            _days.pop() # Remove extra T
            _days.append('TH')
        else:
            _days.append(ch)

    return _days

def clean_time(time: str):
    return time.replace('-', ' - ')

PATH = 'dataParser/section.html'
DATA = {
    'courses': [],
    'instructors': [],
}

with open(PATH, 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'lxml')
    keys = ['course', 'title', 'credits', 'section', 'type', 'language', 'capacity', 
            'enrolled', 'instructor', 'room', 'days', 'time', 'remark']
    
    rows = []
    instructors_set = set()
    courses_set = set()

    for tr in soup.select('.SEC_SCHED_FORSTU_TABLE_SCHED_Table tr')[1:]:
        row = {}
        for j, td in enumerate(tr.select('td')):
            if keys[j] == 'days':
                row[keys[j]] =  parse_days(clean_text(td.text))
            elif keys[j] == 'time':
                row[keys[j]] =  clean_time(td.text).split('/')
            elif keys[j] == 'room':
                row[keys[j]] =  td.text.split('/')
            else:
                row[keys[j]] =  clean_text(td.text)

        row['capacity'] = f"{row['enrolled']}/{row['capacity']}"
        del row['enrolled']
        del row['remark']

        rows.append(row)

        instructors_set.add(row['instructor'])
        courses_set.add(row['course'])

    DATA['courses'] = rows
    DATA['course_names'] = list(courses_set)
    DATA['instructors'] = list(instructors_set)
    DATA['instructors'].sort()

    with open('schedule.json', 'w', encoding='utf-8') as outf:
        json.dump(DATA, outf, indent=3)