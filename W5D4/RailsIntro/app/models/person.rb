class Person < ApplicationRecord
    validates :name, presence: true
    validates :house, presence: true

    belongs_to(:house, {
        primary_key: :id, # house id
        foreign_key: :house_id, # house_id on person
        class_name: :House
    })
end