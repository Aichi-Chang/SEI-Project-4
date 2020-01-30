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


### 🤗 Wins ###

- I decided to complete this project on my own as we had only learned Python and Django a week prior to completing the project. It was difficult while completing it, as it showed loopholes in my knowledge but this project also helped me gain a better understanding.
- Rather than using the front end filter function. I have learned how to override the back end's query set to limit different user's access and successfully applied it to the project. 
- Completed the front end using React Hooks. It makes the code cleaner and easier to understand for other developers.
- It was a great experience working with a UX designer. It helped me to see our project from a different angle.

### 🧐 Chanllenges ###

- Add the tags feature halfway on the project, and it was difficult to rewrite the code and try to cover every corner that has got affected by it.
- Try to learn new features whilst building the project. I spent a lot of time reading through the documentation and other developer's questions on Stack Overflow. It was good practice for me, but couldn't manage to complete them all on time.
- Outside of the assigned time frame, I have used some extra time for bug fixing. So time management is important.


### 🔮 Potential future features ###

- React Calender
- React Drag and Drop
- Link the edit function form the back end to the front end.