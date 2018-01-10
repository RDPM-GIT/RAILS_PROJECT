class Record < ApplicationRecord
    validates :name, presence: true
    validates :place, presence: true
    validates :age, presence: true
end
