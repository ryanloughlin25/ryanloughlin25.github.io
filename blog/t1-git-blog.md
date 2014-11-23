Intro to git

What does "version control" mean?

11/20/14

git is a version control system, but what does that mean - "version control" ?  A version control system is a tool that makes it easier to keep track of multiple versions of a project.  At first that sounds odd to a lot of people.  Why would I want multiple versions of the same project?  Don't I only need the finished version?  Keeping track of multiple versions becomes important when you plan to work on a project for many months or with many people.  Allowing each person to have their own version of the project lets them work separately and then combine their contributions into the main project without getting in each other's way. Version control is especially important if the project is research or business focused because the goals of the project may change after you start.

Ok so version control is important, but how does git do it?  git has a feature called a commit that allows you to save a file.  In most software, for example Microsoft Word, when you save a file it overwrites the old version and only keeps the new version.  When you commit a file in git, git saves the entire new file and also keeps the entire previous version of the file.  Over time you end up with many versions of the same file.

git also has features that allow you to share the different versions of a file with other people.  One of those features is called a remote.  A remote is a url that git will keep track of a url for you.  Once you add a remote, then git has another feature you can use called push.  Push allows you to send a file (and all the previous version of it) to the remote url.  That might sound odd, but you can think of it like dropbox.  If you are familiar with GitHub, GitHub is a website that is designed to act as a remote so that you can store and share your git tracked projects online.
