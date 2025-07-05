FrontEnd:
Technologies : ReactJs , TypeScript

Pages :

1. Patient Dashboard Main Screen -
   Landing page , with all the patient upcoming appointments
   tip of the day

2. Profile Management Page -
   top right side , profile icon -> Redirect to -> Profile management page
   User Details - view data -
   text fields : email , fname, lname. Edit data - phone number
   text fields : Basic health info - allergies , medications fields

BackEnd:
Technologies : Nodejs , Express , postgres

MVC framework :
Model: Database connectivity , Schemas

1. Patient Dashboard Schema
2. Profile Management Schema
3. Appointment Bookings Schema

Controller: Router & Business Logic
Patient Dashboard -

1. GET All Appointments - /appointments/:patientName Patient upcoming appointments
2. GET- /getEach - health tip of the day -

User-Profile:

1.  PUT - /edit/:patientName Patients to edit
2.  GET- /:patientInfo Patient to view

Appointments :

1. POST - /book-appointment/:patientName

View: No View , as we are using ReactJs framework in the frontend

UI API Contract :

-Book Appointments :
POST request

1. {url}/appointment/:patientName

request body:{
doctorName: String,
Date:String mm/dd/yyyy
Time Slots :String
ReasonForVisit: String
AdditionalNotes: String
}

Follow 2. response format for Error handling

2. Handle Errors :

Response Status Code - 201
Response :{
success: "appointment is booked"
}

errorResponse code -
401 - unauthorized
403 - access forbidden
400 - invalid timeslots , date , doctor name is null

{
errorResponse:{
statusCode:400/500
message:"Doctor name cannot be empty or null"
}
}
