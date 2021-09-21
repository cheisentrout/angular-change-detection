# Angular’s Change Detection Strategy

## Basics of Change Detection

Angular tracks when a component’s data changes, and updates the UI based on the changed data.
Change detection is the mechanism for syncing a component’s template with a component’s data. This demo project focuses specifically on Angular's built in ChangeDetectionStrategy.

***************
## Change Detection Strategy

- Angular’s Change Detection Strategy is an enum with two members: OnPush(0) and Default(1).
- The Default change detection method continuously detects changes throughout the app, and re-renders the UI every time a change in data occurs.
- This can become a performance issue in a large app, in which a superfluous event in a lower-level component could cause an entire app to re-render.

***************

###### DEMO: *Parent-level data change*
- Open the Console tab in dev tools and click the Person data button on the parent component.
- With Default change detection, when data changes at the parent level, all components are re-rendered, even though the data only affects the Input in first-child.
- Comment in OnPush on the first-child component. Click the Person data button again.
- All descendants of first-child are also re-rendered, regardless of it’s Change Detection Strategy -- changes are passed down the tree when they are relevant
- Important to note that the Input data points to a new object reference. If the onClick function instead only mutates data in the existing person Object, the change is not reflected in the DOM. (Comment out the if/else person data statement, comment in the "Melody" code.)
- Demonstrate hard coded mutation to person object (reference type) by clicking the Person data button.(Should not update UI)
- Demonstrate hard coded mutation to number (value type) by clicking the Change Number button. (Should update both the number, and reflect the "Melody" update.)

***************
## More on OnPush Change Detection

- Using the OnPush Change Detection Strategy basically protects a piece of the component tree from re-rendering unnecessarily.
- This can improve performance for an app.
- OnPush is inherited by all child components and cannot be overridden.
- You can still explicitly invoke change detection on a child component of the OnPush CDS.

***************
###### DEMO: *First Great-Grandchild / Second Grandchild Change*
- Comment OnPush back out on the first-child.
- Trigger event on the first-great-grandchild component by clicking the button.
- Note that change detection begins all the way up at the parent level
- Every single component in the tree runs change detection
- Trigger second-grandchild event, see whole tree re-render.
- Comment in OnPush and once again trigger change on second-grandchild -- what changes?

***************

###### What I’ve yet to learn…

- Can you use explicit change detection to skip over a parent component with OnPush?
  - Using ChangeDetectorRef for this
- How Change Detection listens to and is affected by Observables.
- In the Demo, I’d like to be able to trigger the event in the second-grandchild and have the first-great-grandchild detect the changes made there, despite it being descended of the first-child with OnPush.

***************
###### References

[How Does Angular 2 Change Detection Really Work?](https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/)
[OnPush Change Detection - How It Works](https://blog.angular-university.io/onpush-change-detection-how-it-works/)
[The Last Guide to Angular Change Detection You Will Ever Need](https://www.mokkapps.de/blog/the-last-guide-for-angular-change-detection-you-will-ever-need/)
