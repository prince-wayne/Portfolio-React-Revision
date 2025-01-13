# Timesheet
**Starting 1/6/25,**

## Structure

Follow this structure to keep this file clean. 

Date, 
Week, 
Day, 
Starting notes,
Tasks for today,
Completed Tasks,
Notes,
Leaving Notes.  

## Before we start

I would like to address that due to both home and weather conditions I was not able to work last week, and I see the possiblity of little work this week, we are officially a week behind (we have a twenty hour weekly goal, not a deadline), but we shall get back to our time line but either finishing early or adding those hours to the coming days/weeks, for example 20 hours missed, adds 10 hours onto coming two weeks. 

## Week II

### Monday, 12/6/2025 (Happy birthday)

**Start**: 12:00 AM,

**End**: [enter end time after completion]

| Task | Status | 
|-| -|
Develop Home page | in progress
Design About Page | in progress

#### Home Page
| Task | concept |
| - | -
Sections | profiecent
Projects Floating display | Worked with, applying an idea
Contact functionality | manageable
conpondents | Procient


can't do design work if library is closed due to weather and home conditions. 

---
**1:14 AM**:

Homepage, mostly finished, now we need to create the compondents used on the home page (likely to be used somewhere else)

We will have to wait on the styles until we have react usable by our work station (our computer doesn't have the space needed and a usb drive didn't work, for reasons I can't remember, in the past)

We will now be creating the inline icons compondent, it's purpose is to evenly space the icons within the box given (this sounds like it could just be a css class)

Honesty, looking at the page itself, the usage of compondents would only impact performance, initial load time, and barely affect the reusage of code.

Popups are needed conpondents but that's seperate from this.

**Compondents:**

- pop up overlay `important`

this will send us the message after being opened. So, two parts (open popup, send message)

- cat button

I just say cat, its for the call to action buttons

- project display box

we should look at and practice common naming convenions to help our work be more user/peer readible. 

- skills section 

this will likely just be class based.

Left and come back to this note after working on `catButton`. It doesn't look or feel worth using considering that it's a basic button with an `onClick` function. Perhaps we just use regular buttons instead of over complication. `@the 10x developer.` **Our solution** will me to transform this into a class for styles. 

**Note Exit: 1:34 AM** 

---

**2:01 AM**

We created that popup section, although everything else can be handle through a class instead of a conpondent. 

That being said we won't be able to work on those until we leave the house which will likely will be after our eight hours are clocked. 

our next step will just be creating a  `main.css` file used for classes like these (inline-icons, cat button, etc.), just anything that is general enough to reappear, we only use two buttons types but I'm unsure of the benefit to creating two seperate (or related) compondents for this simple task. 

After that we could consider creating the projects display item. 

**2:06 AM**

---

**2:36 AM**

I didn't do much, mind seems to be slowing, I'm going to take a short break to refresh, althoug I feel very limited by my current culcumstance. 

I made the skill set compondent, applying the `inline-icons` to it before I forget. Done; 

When we get back from break / rest, depends on if we fall victim to drownieiess (affecting me already), we will work on our projects display, just the setup. We need access to a full computer before we can see the site and ensure functonality. 

---

**break start:**

**2:42 AM**

**break end:**

**3:45 AM**

---

**4:01 AM**

I think we might have to wait until we might have to wait until we get to the library and use one of there computers, there's so much untested cose (code that hasn't been ran) that it's concerning. 

We need to input the modules and images into the page to truely say we finished but the ground work has be dealt with. 

#### Remaining Task

| Task | Status | Issue |
|-|-|-|
fill images     | placeholders set  | no Wi-fi  | 
install node    | waiting           | no Wi-fi  |
style page      | waiting on images | can't run code|
project display | waiting on React  | useEffect |

can't move foward in this moment without wifi. We shall move forward at a later time today hopefully.

**4:11 AM**

---

### Tuesday, 1/8/2025, 9:30 PM

|Tasks | difficulity
|-|-|
**Home Page** | -
Project display | 2
Styling | 1

**What We Did**

nothing major just fixed the project display and filled the data sheet for projects. also we can't see design changes inside of this because it's through figma. 

changes: [project display, design completion, jsx compondent for display, data]

## Week III

### 1/12/25, Day 1 (Sunday) 

**My excuse** 

We've had a wild week and a workplace injury, when combined with having to walk 40 minutes to the library do to lack of home Wi-Fi it doesn't help. 

#### Starting Notes

We did a decent amount of unnoted work, a habit we need to fix. but it mostly exsited in `"/src/project display/project display.jsx"`. However, one hanging issue is never executed code. Our current computer has limited storage capacity that I've never noticed untill I began using react studies. 

**What I didn't note** 

Hard to say but I believe I nearly finsiged the `Project display` compondent. 

**As I look at code changes** 

We could save time by having a documentation folder and process. Ask a partner about the standard industry process, My current thought is a mix of as i go and at the end, Likely will be a end of week thing. I'm unsure. 

Looks like we hit every item for the `project display` compondent. Including the selection btns (no image) and the dot logic/status. The next step would likely be us going throught the home page and attacking he hardest task remaining, a lot of stuff is just inputting images currently. only code heavy things were this and the contact section. 


#### Tasks

Title | Note? 
|-|-|
Project display | Mostly done if not already complete
Home page | likely just images and classes
input of design file | We spent a decent amount of time outside development and in design last week. 

If i had to guess I'd say we spent 15 hours designing the current file (loaded in today) we only need to design the contact page now.

Development Start: 27 mins into clock. (notes are important for flow hopefully)


#### Notes

**8:19 PM** 

We don't have any critical issues, however we are creating a exit tool to exit functions faster(for turnover time not proformance) by quickly checking for values and exiting code block for non essential items. however if the compondent code fails we are thiknking of having a defined range to allow the user to still see secondary information. 

**Exit: 8:22**  

---

**8:54 PM**

we found that it isn't the best way to handle it, we can just use the try and catch whenever we check a value. 

--- 

**9:14 PM** 

We took a quick look at the log file stuuf we've seen recently, We will apply it once we're comfortable with the topic and have studied it well enough for proper uslage. 

---

#### Leaving Note 1`)`

we will start again at home, but here's what we need to do, use conditional rendering to control the icons gird or icons rows. if the thing is a grid then we need to change the placement to exsist outside the rows to pervent needing multi

#### Returning note

Computer died with too little time for me to complete the task at hand, thankfully It died during the note above, we were debating how we would handle the errors and looking at a few logging solutions, idealy log every error that occurs, log maybe ten percent of user performance (info) logs for preventive mantance. 


**Things we handled** 

we have a start to our error handling, go back and ensure project cards have the same fail safes. 
project cards are finished outside of error handling. 
icon group is handled as well, in the future for scalability build the compondent dymanically, .map() / .forEach() 
home page is mostly done out side of the pop up method, we will soon have access to a better computer if things go well. (library access or laptop purchase)

**things we could handle**

One, we don't have a trackpad for our time spent weekly, something like that would help the workflow and planning, two, we are starting multiple processes at the same time, time management will become increasingly important over the course of this year. 

**Current Focus**

Error handling, fallback data (projects & skills), Home page completion (idealy)

**Dev start (code)**

1:43 AM

---

**1:45 AM** 

We should add docs to our focus.

--- 

**2:03 AM** 

Object.map has never existed, although there's a work around to our favorite method. 
look at key and values methods then match the indexing to work this one. 

As i look at my book, there's the possible usage of bracket notation, `object["key"]` thought, use within `keys.forEach()` to allow the keys array select it's value out of the object while using a map on the indivual keys `["front-end", "back-end", "tools"]` then, use a map to map the arrays stored. 

problem solving at work. (cocky smile emoji)

**2:14 AM**

---

**3:04 AM**  

We have the grid stuff all complete aside from styling, (conditional rendering, object function, structure, etc)

next step? project display error handling and general adjustments. 

--- 

**3:36 AM** 

We are debating if we want to use conditional rendering in line or in a styles sheet. we are going to lay our head back and think. time stamp (above) @ 2:14:20 (duration)

our decision is to put the style into main sheet. but, if it gets crowded or there's a need to clean we will remove the css handling and use js. (a complex sheet vs a unnoticable difference in process time) however, I don't have edvidence to proof such a thing. 

breify looked at my book, wanted to see if I could find something unrelated to note. 

Looks like we might not need it for our projects display, the only possible error is the dataloading. 
or it loading incorrectly, we'll handle incorrect data

**3:50 AM**

---

**4:14 AM**

Better thank prettier for saving that missed error. () => {} not () = {}

---

**5:05 AM**

I'm up, still. we improved the state management on the dots. although, this could have been done with the use of an else statement. more than likely. might not have been a promance gain here. looks cool though right? (crying emoji) 

**Taking a break: 5:12 AM** 

---

**Back from break: ? AM**
