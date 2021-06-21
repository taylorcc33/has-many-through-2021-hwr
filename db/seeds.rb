# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Thing.create(name:'Thing 1')
Thing.create(name:'Thing 2')
Cat.destroy_all
Course.destroy_all
Student.destroy_all


20.times do
    name = Faker::Creature::Cat.name
    breed = Faker::Creature::Cat.breed
    registry = Faker::Creature::Cat.registry
    avatar = Faker::Avatar.image(slug: name, size: '100x100', format: 'png', set: 'set4')
    Cat.create(name: name, breed: breed, registry: registry, avatar: avatar)
  end
  
  puts "#{Cat.all.size} Cats Seeded"
  
#################################################################

@course_ids = []

10.times do
  course = Course.create(name: Faker::ProgrammingLanguage.name)
  @course_ids << course.id
end

10.times do
  student = Student.create(name: Faker::Name.first_name)
  3.times do
    student.enrollments.create(course_id: @course_ids.sample, cohort: ["full-time", "part-time"].sample)
  end
end

puts "courses, students, and enrollments seeded"