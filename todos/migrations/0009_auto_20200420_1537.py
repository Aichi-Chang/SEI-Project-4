# Generated by Django 2.2.9 on 2020-04-20 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0008_auto_20200420_1532'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
