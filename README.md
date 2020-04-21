### ![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)


### 🚩 Project-4 - Workbench ###

The final project of the software engineering immersive course at GA London. The assignment was to create a **full-stack application** within **one week**. I worked solo as a software engineer along side with a UX designer.

Workbench is a schedule management app aimed at designers or students managing their on-going projects. Different users will have a clean board to themselves to start with and they will be able to add and update notes or to-do lists. The platform enables users to track their work flow online. 

Visit the site here - [Workbench](https://project-4-workbench.herokuapp.com/#/), or you can also find the GitHub repo - [GitHub](https://github.com/Aichi-Chang/SEI-Project-4)


#### Preview
![ezgif com-video-to-gif](https://media.giphy.com/media/RM5wellDBMBzW6ITEC/giphy.gif)



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

#### Project plan

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
<img src='https://github.com/Aichi-Chang/project-4/blob/master/frontend/src/assets/Screenshot%202020-01-30%20at%201.32.46%20pm.png?raw=true' width='50%'>

- Add extra features, eg. tags models and serializers. Adjust the views for different end-points.
- Override the query set so that different users could only access the correct inbox given the various privacy settings.
- final routes test on Insomnia and seed the database onto Fixtures.
<img src='https://github.com/Aichi-Chang/project-4/blob/master/frontend/src/assets/Screenshot%202020-01-30%20at%201.25.48%20pm.png?raw=true' width='50%'>

#### Front end

- Get brief and design files from other team mate, discuss protential features and user interface.
- Set up the front end instructure. Connect the back end to the Front end. 
- The style of the project aimed for clean and easy to use.
<img src='https://github.com/Aichi-Chang/project-4/blob/master/frontend/src/assets/Screenshot%202020-01-30%20at%201.22.19%20pm.png?raw=true' width='50%'>

- Have inbox and other folders for different purposes. The folders are set up as the tags in the backend. When user create project, they will be able to classfy them. 
- I have added React Drag and Drop feature, easy for users to sort their projects' order.


### 🤗 Wins ###

- I decided to complete this project on my own as we had only learned Python and Django a week prior to completing the project. It was difficult while completing it, as it showed loopholes in my knowledge but this project also helped me gain a better understanding.
- Added React Drap and Drop, I have used ReactDnD as a library for this feature. It was a challenge for me to go through the documentation, find the most suitable function and apply it to my application. The next step I would like to extend this functionality to drag and drop projects into folders which will direct edit the data in the back-end.

```js
 const moveCard = (dragIndex, hoverIndex) => {
    const dragCard = data[dragIndex]
    setData(
      update(data, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard]
        ]
      })
    )
  }
```

```js
{data.map((projects, i) => {
  return <Card 
    key={projects.id} 
    index={i} 
    className='project pa3 flex items-center justify-center grow' 
    moveCard={moveCard} 
    title={projects.title}
    url={`/single-project/${projects.id}`}
  />
```

- Rather than using the front end filter function. I have learned how to override the back end's query set to limit different user's access and successfully applied it to the project. 
  
   ```python
  class TodoListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        serialized_todos = PopulatedTodoSerializer(self.get_queryset(), many=True)
        return Response(serialized_todos.data)

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(owner=user.id)
    ```
- It was a great experience working with a UX designer. It helped me to see our project from a different angle.
<img src='https://github.com/Aichi-Chang/project-4/blob/master/frontend/src/assets/Screenshot%202020-01-30%20at%201.07.14%20pm.png?raw=true' width='50%'>


### 🧐 Chanllenges ###

- Add the tags feature halfway on the project, and it was difficult to rewrite the code and try to cover every corner that has got affected by it.
```python
class Tag(models.Model):
    name = models.TextField(max_length=20)

    def __str__(self):
        return f'{self.name}'


class Project(models.Model):
    title = models.CharField(max_length=50)
    note = models.TextField()
    owner = models.ForeignKey(User, related_name='projects', on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, related_name='projects', blank=True)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.title}: {self.note}, {self.owner}'
```
```python
  class TagSerializer(serializers.ModelSerializer):

      class Meta:
          model = Tag
          fields = ('id', 'name', 'projects')
  
  class ProjectSerializer(serializers.ModelSerializer): 

    class Meta:
        model = Project
        fields = ('id', 'title', 'note', 'tags', 'owner', 'todos', 'created_at')
        extra_kwargs = {'todos': {'required': False}, 'tags': {'required': False}}

  class PopulatedProjectSerializer(ProjectSerializer): 

    owner = OwnerSerializer() 
    tags = TagSerializer(many=True)
    todos = TodoSerializer(many=True)

  class PopulatedTagSerializer(TagSerializer):

    projects = ProjectSerializer(many=True)

```

- Try to learn new features whilst building the project. I spent a lot of time reading through the documentation and other developer's questions on Github and Stack Overflow. It is hard but a good practice for me to grow as a developer!
- Outside of the assigned time frame, I have used some extra time for bug fixing. So time management is important.


### 🔮 Potential future features ###

- React Calender 
I've been working on the Calendar feature, and now users will be able to see how many projects they have on the calendar. by clicking the projects on the calendar, users will be directed back to the project inbox page.
<img src='https://github.com/Aichi-Chang/SEI-Project-4/blob/master/frontend/src/assets/Screenshot%202020-04-21%20at%2013.55.48.png?raw=true' width='50%'>
- Google account sign up and login
- Link the edit and tick completed function form the back end to the front end. And creat the user interfaces for it.
