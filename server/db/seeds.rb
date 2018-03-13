# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ark = User.create! username: 'ark', password_digest: '$2a$10$nqj.n6HM1OQHoy6hD8l2IOWT4egkWr9WJLwaspwK1U6Qt6Ylg5MVy'
Prescription.create! user: ark, name: 'Prednisone', dose: '5mg', count_goal: 1, recurring_period: 'daily', taken: 0, last_taken: DateTime.now, goal_is_met: false, start_date: Date.today, end_date: Date.tomorrow, notes: 'Makes you hungry!'
