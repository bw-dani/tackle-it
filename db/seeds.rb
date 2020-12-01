# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.destroy_all
Category.destroy_all
User.destroy_all

@admin = User.create!(username: 'admin', name:'dani', password: '123456')

puts "#{User.count} users created"

@category1 = Category.create!(name: 'home')
@category2 = Category.create!(name: 'work')
@category3 = Category.create!(name: 'family')
@category4 = Category.create!(name: 'personal')

puts "#{Category.count} categories created"

@task1 = Task.create!(description: 'idk what this is going to do', categories: [@category1, @category2], user: @admin)

@task2 = Task.create!(description: 'hope it works', user: @admin)

@task2.categories.push(@category2, @category4)
# @food2.flavors << @flavor2
# @food2.flavors << @flavor5


puts "#{Task.count} tasks created"