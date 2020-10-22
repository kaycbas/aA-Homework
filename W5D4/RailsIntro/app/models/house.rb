class House < ApplicationRecord
    validates :address, presence: true

    has_many(:residents, {
        primary_key: :id, # house's id
        foreign_key: :house_id, # house_id on person
        class_name: :Person
    })
end