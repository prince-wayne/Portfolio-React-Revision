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

### Monday, 1/6/2025 (Happy birthday)

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

---


### Day 2, 1/13/2025, Monday

Where we left off:

We were working on both 
Coming back after sleep

### Day 3, 1/14/25, Tuesday

Yesterday did not go to plan, although it wasn't wasted, we worked on securing a job/intership instead and looks like we might've got one. However, once we got back home the whole day went away. 

**Before we start**

our **home page** is our current focus, imgs don't matter yet but we should get them soon so they're here, WE ARE STILL DEVELOPING BLIND, it would be nice to get to the library but the car we were supposed to get was sold, so we're looking for another, also **UPDATE** we will likely be starting our blog here as well, considering that this is a portfoilo though we might want to review and research, We can match the blog post to our current site but its not likely, and it will likely open as a new page instead of a subpage. 

|**Tasks** | Note |
|-| -|
Home Page | -
Projects view | review
Icon group | review

continue top to bottom for home page and ensure we able to move onto the about page


**Start 5:37 AM**

--- 

**6:02 AM** 

only possible issue with projects is an empty string. we made a fallback error message to handle that. 
next the icon group.

**Icon Gourp**

Has no apparent issues, there's no reason to create an error or fallback considerng it's not using js to load anything in or deal with any values. Error logs here are for the development process if anything.

**Project display p2**

I chose to change it to include children, both for the structure of the pages and or the matter of headers chaning and some needing sub text.

---

**6:18 AM**

We are onto the final part of the home page, `contactPopup.jsx`, this will likely be the challenging part (it's our very first popup ever used) but it's a very good oppertunity to learn

also to add we are building this site with a few tools, 

Sass, and then this prerender api that was recently built into web browers. (hasn't been applied to all browers) I think it was chrome and safari that currently supports it. 

**Issue** 

We don't have the design file containing the popup, though we will later, so our solution will be us building the other two pages we can see instead. 

---

**6:48 AM**

within icon group we made a small change to allow clicking on icon, 

`
{...link ? 'href = ${link}' : null}
`

unsure of how this would work so it's something i would have to look at myself later today hopefully but the idea is that the operator checks for a link and then adds it to the icon or does nothing. 

**Traveling to library : 6:54 AM** 

we'll be right back, things are at a stopping point, when we get back we will be handling the about page. 

**We're back : 8:43 AM** 

added a few of the imports then realised I could have chatGPT or another ai to check for failing code. also I might as well write the test whle I'm here. Also I got distracted for a short moment

I was wrong they can't review it for me, but if there's anyone reading I would greatly appricate you guys (I mispell words some times, if that ever doesn't say guys it wasn't intentional)

**Moving onto Test writing**

**9:00 AM**

Our computer crashed and westarted a while ago with the test building but It's fine. 

| **current tasks**| note| 
|-|-|
Build Tests for Home compondents | new topic
Build popup overlay for contact button | new topic

**11:00 AM**

Slight struggle to focus. slightly warm and tired. but test for home (not much needed beside ensuring popup functions and compendents load to page), project display, test that the project handles load and then click operations

onto the icon tests, we don't need it to be honest, the images and error handling would tell us if we forgot images or props in the compondent

**12:00 AM**

We might reserve the `---` for the day to day to day instead of time to time, it's a little messy. 

but we have built test for the home and for the project thing. we built the overlay system mostly but we need to adjust it to accept children so i can interchange the compondent (links and contact form);

we will aso need to build the test for this as well. and the handler for once they press that submit button. 

**12:30 PM** 

There's a high risk with our contact overlay, we struggle with that useContext topic in our past and we have no way to test them here


**1:00 PM** 

I'm taking a break, 
move onto 

---

### Day 4, Thurday 1/16/2025

**Issue** We didn't structure this correctly and it looks like we either didn't count the week as a week or something of that nature, we might've considered this to be week 3 because of the situlation but to track things, like time, effectively, this was week 4. 

#### Tasks

| **Task** | Note | 
|-| -|
About Page | build off the design file.
review home page | ensure everything is complete. 

start taking notes on what was done. It would reduce the time spent before notes of the next sesson.

## Week VI 

**Summary**

We are not having the best luck, very unfortinit turn of events. Our computer is starting to crash mid flow of work. Struggles from: being sick, no phone data, no home WI-FI; sounds a lot less than it's active affect, but, this week we will remain at the library if able.

**Reminder** 

Our design file is from a time before we decided to include our blog page, don't do the about page until you've redesigned it. 

**Target hours this week** | Role | Value
|-- | - | - | 
10 | Develop | $300
5 | Design | $100

We have a job outside of this but it's okay we only want to do as much as we can. avoid burnout. 

| Day | Role | Hours | Note |
| - | - | - | - | 
Sunday | - | - | Sick | 
Monday | Develop | 4 hours | today, working through the night, our focus is changing the `projects display` to accept different sort
Tuesday | Design | 2 hours | contact page 
Wednesday | Design | 2 hours | blog pages addition / call to
Thurday | Design | 1 hour | Touch up 
Thurday | Develop | 3 hours | about page 
Friday | Develop | 3 hours | about page sub compondents, anything else we can fit into this day

---

### Day 1, Monday

**Summary** 

Today we will be working on the projects display, we need them to accept a sort for when we display personal, business, paid work, and study projects. 

**10:42 PM** 

I think using the filter method on the returned data would be best, also this data is something that would be used across the site could be used in our use context stuff we barely understand. 

never a bad time for practice (insert crying emojis here)

**11:10 PM** 

I ate something and refered to the book to breify see all options for this, remeber that I'm not online to use mdn. it looks like fliter should work. however it edits the array in place, might not be a best practice but we don't need the rest of the array if it works how expected, `WE WILL NEED TO WRITE A TEST FOR THIS` 

Writing the test, I think we will need to write the `projects display` within our test file to be filtered by group before we start testing, or have a seperate test within the same file that would handle the filtered version and the unfiltered version. 

our checkGroup has worked indirectly to save us from something that would've caused us to redo the entire test file. 

I think the method i need out the testing library is the describe, with the ability to target values within Compondents

**Best Practice Issue** 
`"/src/components/project display/project display.jsx"` <br>
`line: 64` <br>
We might not have used the best solution for this, we should as a peer or copilot if this is a good solution

**11:40 PM** 

Ironic day, that youtube video about the sinlge line edits is the best way to explain what was done here, idealy we should move onto the next task and return to the `test file`. 


**12:00 AM** 

ensure we handled the naming conventions correctly, I belive we used `hero-section-overlay` and `...-overlay-content` which contained a header and a p element

---

### Week V, Saturday 
 
#### Critical Issue

I literally can't open VScode to begin tonight, possible that the WI-FI is the cause. But at least we can work on design instead until this is figured out. An unlucky lucky guy, We got those two women we were asking for, but now our phone's charger is farkin broken... How am I supposed to continue this one ...

### Week VI, 

#### Sunday 1/26/25

We are going to power through designing since we can't develop. Overtime we will be handle to handle multiple workflows and adjustments but right now we have many limiters affecting us like our WI-FI and computer regularly crashing during development. 

Still might be slow but our start time for physical design is 7:35 PM and we opened the task at 7:00 PM. 

| Tasks | |
| -| -|
| Add blog sections across the website |  <input type="checkbox" >|
| design Contact Page  |  <input type="checkbox" >|
| adjust `project display` to work for blog post  |  <input type="checkbox" >|

**Before we Start** 

We are adding to the original plan, chaning the name of project display to multi display would make it better, but making something that would  accept a data path and sort could improve it. 

**Start of design 7:45 PM ** 







