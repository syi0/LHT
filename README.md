import tkinter as tk
from tkinter import messagebox
def validate_name(name):
    if name.isalpha():
        return True
    return False
def on_submit():
    name = name_entry.get()
    if not validate_name(name):
        messagebox.showerror("Invalid Input", 
                             "Name must contain only alphabets.")
    else:
        messagebox.showinfo("Valid Input",
                            "Name is valid.")

root = tk.Tk()
root.title("Name Validation")
root.geometry("300x200")

name_label = tk.Label(root, text="Name:")
name_label.pack()
name_entry = tk.Entry(root)
name_entry.pack()
submit_button = tk.Button(root, text="Submit", command=on_submit)
submit_button.pack()

root.mainloop()






import tkinter as tk
from tkinter import messagebox
import re

def validate_email(email):
    email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    if re.match(email_pattern, email):
        return True
    return False

def on_submit():
    email = email_entry.get()
    if not validate_email(email):
        messagebox.showerror("Invalid Input", 
                             "Email must contain '@' and '.' characters.")
    else:
        messagebox.showinfo("Valid Input", "Email is valid.")
root = tk.Tk()
root.title("Email Validation")
root.geometry("300x200")
email_label = tk.Label(root, text="Email:")
email_label.pack()
email_entry = tk.Entry(root)
email_entry.pack()

submit_button = tk.Button(root, text="Submit", command=on_submit)
submit_button.pack()

root.mainloop()




#Photo
klient_photo = tk.PhotoImage(file="klient.png")
klient_photo_label = tk.Label(form_frame, image=klient_photo)
klient_photo_label.pack()

#Gender
gender_frame = tk.Frame(form_frame,bg="#D4D9DB")
gender_frame.pack()
gender_var = tk.StringVar()
male_radio = tk.Radiobutton(gender_frame, value="Mężczyzna", text="Mężczyzna", variable=gender_var,bg="#D4D9DB")
male_radio.pack()
female_radio = tk.Radiobutton(gender_frame, value="Kobieta", text="Kobieta", variable=gender_var,bg="#D4D9DB")
female_radio.pack()

#Advance Level
options = [
    "Podstawowe",
    "Zawodowe",
    "Średnie",
    "Wyższe"
]
clicked = tk.StringVar()
clicked.set(options[0])
level = tk.StringVar
levels_choice = tk.OptionMenu(form_frame, clicked, *options)
levels_choice.pack()

#Service quality
service_quality_string = tk.StringVar()
service_quality_label = tk.Label(form_frame, text="Jak oceniasz jakość obsługi?",bg="#D4D9DB")
service_quality = tk.Spinbox(form_frame, values=[0,1,2,3,4,5,6],textvariable=service_quality_string)
service_quality.pack()


