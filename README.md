### ![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive


### 🚩 Project-4 - Workbench (Solo) ###

The final project of the software engineering immersive course at GA London. The assignment was to create a **full-stack application** in within **one week**. Worked solo as a software engineer along side with a UX designer.

Workbench is a schedule management app aimed at designers or students managing their on-going projects. Different users will have a clean board to themselves to start with and they will be able to add and update notes or to-do lists. The platform enables users to track their work flow online. 

Visit the site here - [Workbench](https://project-4-workbench.herokuapp.com/#/), or you can also find the GitHub repo - [GitHub](https://github.com/Aichi-Chang/project-4)



### :rocket: Get Started ###

* Clone or download the repo
* `pipenv shell` to move into virtual environment
* `npm install` and `pipenv install` to install dependencies
* `python manage.py dumpdata project4 --output todos/fixtures.json --indent=2` to populate database
* `npm run serve:backend` to run back end
* `npm run serve:frontend` to run front end


### 📝 Brief ###

* **Build a full-stack application** by making your own back end and front end
* **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Have a visually impressive design**
* **Be deployed online** so it's publicly accessible.


### 🕹 Technologies used ###

* HTML5
* CSS3
* Node
* JavaScript (ES6)
* Git
* GitHub
* React and React extensions
* Webpack
* Tachyons
* Yarn
* Babel
* Insomnia
* Python 3
* Django
* Heroku


### ✔️ Approach Taken ###

| Time      | Tasks         |
| ------------- |-------------|
| **1 day**    |  Ideas research, Team brief, planning project days   |
| **2  days**     |  Backend Initial set up, UX design first edition  |
| **2 days**  | Frontend set up, UX design complete      |
| **1 day**  | Styling and Troubleshooting With Instructor   |
| **1 day** | Bug fixing, final polishing  |
| **1/2 day** | Deployment     |


#### Back end

- Set up the project model and todos model, add the user model using JSON Web Token. Build views, serializers, and URLs. Create tables and data with PostgreSQL.
- Hook the project files up with admin and test on the Django REST framework. Also, test the routes on Insomnia.
- Add extra features, eg. tags models and serializers. Adjust the views for different end-points.
- Override the query set so that different users could only access the correct inbox given the various privacy settings.
- final routes test on Insomnia and seed the database onto Fixtures.

#### Front end

- Get brief and design files from the designer, discuss the features and user interface.
- Set up the front end instructure. Connect the back end to the Front end. 
- The style of the project aimed for clean and easy to use.
- Have inbox and other folders for different purposes. The folders are set up as the tags in the backend. When user create project, they will be able to classfy them. 
- Use SVG files, to make the images look sharp at any dimension with tiny file sizes.
- Styling using Tachyons.


### 🤗 Wins ###

### 🧐 Chanllenges ###

### 🔮 Potential future features ###


I decided to complete this project on my own as I wanted to develop my knowledge of Django and Python as we had only learnt it a week prior to completing the project. I found this aspect quite tough as it showed loop holes in my knowledge but this project helped me develop a better understanding.