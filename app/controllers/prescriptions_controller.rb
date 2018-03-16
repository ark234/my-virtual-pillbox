class PrescriptionsController < ApplicationController
	before_action :ensure_signed_in

	# Check if new pill cycle started
	def daily_check(id)
		prescription = Prescription.find(id)
		today = Date.today
		last_taken = prescription.last_taken.to_date

		prescription.update!(goal_is_met: false, taken: 0) if (today - last_taken).to_i > 0
	end

	# Retrieve all perscriptions on uid
	def index
		puts "--->in prescriptions#index"
		puts "--->uid: #{current_user.id}"
		prescriptions = current_user.prescriptions
		prescriptions.each do |rx|
			daily_check(rx.id)
		end
		render json: current_user.prescriptions.sort
	end

	def take_pill
		prescription = Prescription.find(params[:id])
		count = prescription[:taken] + 1
		time = DateTime.now

		if count >= prescription[:count_goal]
			prescription.update!(taken: prescription[:count_goal], goal_is_met: true, last_taken: time)
		else
			prescription.update!(taken: count, last_taken: time)
		end

		render json: current_user.prescriptions.sort
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
		render json: current_user.prescriptions.sort
	end

	# delete prescription on id
	def destroy
		prescription = Prescription.find(params[:id])
		prescription.destroy!
		render plain: "Prescription id #{params[:id]} deleted!"
	end

	private

	def rx_params
		params.require(:prescription).permit(:name, :dose, :count_goal, :recurring_period, :goal_is_met, :taken, :last_taken, :start_date, :end_date, :notes)
	end
end
