module Api
    module V1
    class RecordsController < ApplicationController

        def index
            records = Record.order('created_at DESC');
            render json:{
                status: 'SUCCESS',
                message:'Successfully loaded the records',
                data:records
                },
                status: :ok
        end

        def show
            record = Record.find(params[:id])
            render json:{
                status: 'SUCCESS',
                message: 'Successfully got the single record',
                data: record
            },
            status: :ok
        end

        def create
            record = Record.new(record_params)
            if record.save
                render json:{
                    status:' SUCCESS',
                    message: 'data successfully added',
                    data: record
                },
                status: :ok
  
            else
                render json:{
                    status: 'Error',
                    message: 'Data addition failed',
                    data: record.errors
                },
                status: :unprocessable_entity

            end
        end

        def destroy
            record = Record.find(params[:id])
            record.destroy
            render json:{
                status: 'SUCCESS',
                message: 'Record successfully deleted'
            },
            status: :ok
        end

        def update
            record = Record.find(params[:id])
            if record.update_attributes(record_params)
                render json:{
                    status:' SUCCESS',
                    message: 'data successfully updated',
                    data: record
                },
                status: :ok
            else
                render json:{
                    status:' FAILED',
                    message: 'data updation failed',
                    data: record.errors
                },
                status: :unprocessable_entity
            end

        end
           
        private

        def record_params
            params.permit(:name, :place, :age)
        end
    
end

end
end