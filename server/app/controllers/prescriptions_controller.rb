class PrescriptionsController < ApplicationController
	# Retrieve all perscriptions on uid
	def index
		prescriptions = User.find(params[:uid]).prescriptions
		render json: { prescriptions: prescriptions }
	end

	# TODO: create new prescription on uid
	def create
	end

	# TODO: retrieve prescription on id
	def show
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
