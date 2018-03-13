class Prescription < ApplicationRecord
	belongs_to :user

	def index
		@prescriptions = Prescription.all
	end
end
