class PrescriptionsController < ApplicationController
	before_action :ensure_signed_in
	# Retrieve all perscriptions on uid
	def index
		puts "--->in prescriptions#index"
		puts "--->uid: #{current_user.id}"
		# prescriptions = current_user.prescriptions
		render json: { prescriptions: current_user.prescriptions }
	end

	# TODO: create new prescription on uid
	def create
	end

	# TODO: retrieve prescription on id
	def show
		prescription = Prescription.find(params[:id])
		render json: prescription
	end

	# TODO: update prescription on id
	def update
	end

	# TODO: delete prescription on id
	def destroy
	end

	private

	def rx_params
		params.require(:prescription).permit(:name, :dose, :count_goal, :recurring_period, :taken, :start_date, :end_date, :notes)
	end
end
