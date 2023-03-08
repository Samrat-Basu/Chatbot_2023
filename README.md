# HR Chatbot with Attendance and Leave Management

This documentation outlines the steps to create an HR Chatbot using machine learning (ML) models to manage attendance and leave requests for employees. 
The chatbot will be designed to understand natural language queries from employees and provide relevant responses.

## Prerequisites
Before starting, you will need the following:

1) Knowledge of natural language processing (NLP) and machine learning.
2) A dataset of attendance records for your organization.
3) A dataset of past leave requests and approvals.
4) Python 3.7 or higher.
5) pip package manager.
6) Virtual environment (e.g. virtualenv) for Python development.
7) Understanding of Keras/Tensorflow/Pytorch.

## Steps
Prepare the attendance and leave datasets.

The attendance dataset should include the following fields: employee ID, date, time-in, time-out, and any additional information (e.g. reason for absence, late arrival, etc.).
The leave dataset should include the following fields: employee ID, leave type (e.g. sick leave, annual leave, etc.), start date, end date, and approval status.
Train machine learning models for attendance and leave management.

Use a supervised learning algorithm (e.g. decision trees, random forests, or support vector machines) to train a model for attendance management. The model should be able to predict attendance patterns based on historical data.
Use a similar approach to train a model for leave management. The model should be able to predict the likelihood of a leave request being approved based on past approvals and rejections.

FOR DEEP LEARNING CHATBOT -
1. Run *model.py* to build model first.
2. Run *responses.py* to use the model and fetch responses.

Some screenshots are attached below -


# RECRUITMENT and POLICY
![alt text](https://raw.githubusercontent.com/AnmolKankariya/HR-Chatbot/master/hrbot%20recruitment%20screen_2.png?raw=true)

# INTERNAL FUNCTIONS
![alt text](https://raw.githubusercontent.com/AnmolKankariya/HR-Chatbot/master/internal%20hr%20function.PNG?raw=true)

==============================================================================

![alt text](https://raw.githubusercontent.com/AnmolKankariya/HR-Chatbot/master/leave%20screenshor.PNG?raw=true)

# The one who can't take leave
![alt text](https://raw.githubusercontent.com/AnmolKankariya/HR-Chatbot/master/person%20with%200%20leave%20left.PNG?raw=true)

### Set up a new agent in Dialogflow.
Create intents and entities for attendance and leave management. Use the ML models from step 2 to provide responses to user queries.
Use fulfillment webhooks to handle user requests and interact with external APIs (e.g. for updating attendance records or leave approvals).
Test the HR chatbot.

Use the Dialogflow simulator to test the chatbot's responses to different user queries.
Test the fulfillment webhooks to ensure that the chatbot is able to interact with external APIs and update records as needed.
## Conclusion
This documentation outlines the steps to create an HR chatbot with attendance and leave management capabilities using machine learning models. The chatbot will be able to understand natural language queries from employees and provide relevant responses, making it a useful tool for HR departments.
