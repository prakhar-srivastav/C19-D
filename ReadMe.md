# Overview 

This project is the demonstration of exactly how generative adversarial newtwork (DCGANS to be more precise) generate synthetic images of Covid-CXR. The model was trained in google colab and deployed on heruko app. There is a library by the name of "Tensorflowjs" using which python based model file (.h5) can be made to run on javascript. First, the model is converted to the format which can be interpreted by javascript. This was done in python itself. Unfortunately, I ran into error while doing the same for pretrained model (Details on the app). So instead for that part, I created  a flask based API which will take image and output a prediction.

Website : https://covid-arekyu.herokuapp.com/

# Generator Model (implemented on Node.js Framework)

![Capture](https://user-images.githubusercontent.com/28844605/89126921-66898f80-d507-11ea-8987-33082b56c4b2.PNG)

# Pretrained Model (implemented on Flask API)

![Capture](https://user-images.githubusercontent.com/28844605/89127005-d566e880-d507-11ea-900a-ea5a6f48403b.PNG)
