# Generated by Django 3.0.2 on 2020-01-15 11:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0002_auto_20200113_2143'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='tags',
        ),
        migrations.AddField(
            model_name='project',
            name='tags',
            field=models.ManyToManyField(blank=True, related_name='todos', to='todos.Tag'),
        ),
    ]
