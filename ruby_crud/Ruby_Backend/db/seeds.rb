2.times do
    Record.create({
        name: Faker::Book.title,
        place: Faker::Lorem.sentence,
        age: Faker::Number.number(1)
    })
end