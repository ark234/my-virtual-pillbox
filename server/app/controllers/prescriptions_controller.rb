class PrescriptionsController < ApplicationController
	before_action :ensure_signed_in
	# Retrieve all perscriptions on uid
	def index
		puts "--->in prescriptions#index"
		puts "--->uid: #{current_user.id}"
		# prescriptions = current_user.prescriptions
		render json: current_user.prescriptions
	end

	# create new prescription on uid
	def create
		new_prescription = current_user.prescriptions.create!(rx_params)
		render json: new_prescription
	end

	# retrieve prescription on id
	def show
		prescription = Prescription.find(params[:id])
		render json: prescription
	end

	# TODO: update prescription on id
	def update
		prescription = Prescription.find(params[:id])
		prescription.update!(rx_params)
		render json: current_user.prescriptions
	end

	# delete prescription on id
	def destroy
		prescription = Prescription.find(params[:id])
		prescription.destroy!
		render plain: "Prescription id #{params[:id]} deleted!"
	end

	private

	def rx_params
		params.require(:prescription).permit(:name, :dose, :count_goal, :recurring_period, :taken, :last_taken, :goal_is_met, :start_date, :end_date, :notes)
	end
end
