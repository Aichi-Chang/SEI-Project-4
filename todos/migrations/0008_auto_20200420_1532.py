# Generated by Django 2.2.9 on 2020-04-20 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0007_auto_20200420_1526'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='created_at',
            field=models.DateTimeField(),
        ),
    ]
