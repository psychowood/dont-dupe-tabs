# ![Logo](resources/logo.png?raw=true "Logo") DDT - Don't Dupe Tabs

DDT tries to help people with a compulsive tabs opening habit by preventing duplicated tabs. It won't cure you, but hopefully you'll suffer less.

You can install it via the [chrome web store](https://chrome.google.com/webstore/detail/ddt-dont-dupe-tabs/ncbjbdeipjpnhfeggbbdkiibhpjaieef) link.

## The Context

I tend to open and reopen the very same tabs again and again, just to refresh their content. I've usually got lots (150+ on several browser windows) of open tabs, and even with the use of some Chrome extensions it takes too much time to find the one I want to refresh. So, since my Bookmarks Bar is full, and I reopen the website I want to read once again. And again. And again.


## The Need

I don't want to care anymore about duplicated tabs. Please remove them for me, oh mighty browser, whenever I open another tab with  a link already present somewhere else.


## The Result

Whenever the user opens a new tab, either via CTRL/CMD+click on a link or Right click -> Open in new tab, the extension looks for any other open tabs with the very same url and close them if found.

You can enable/disable the extension by clicking on the extension action icon.


## Is it safe?

DDT requires two kind of permissions from Chrome:

 - *tabs*: to access the tabs list with their urls
 - *storage*: to save the enabled/disabled state

It **does not**:

 - *access the network* (in any way, not even for checking for updates)
 - *read the contents* of the opened pages

It **could**:

 - *close some tabs you don't want to close*: this extension is in Beta stage. I've never lost anything I did not expect to lose in all the testing I did, but please don't hold me responsible if anything bad happens


## Known limitations

 - It activates only when the user requests a new tab, not when you are clicking on a link that opens a new tab
 - If you really want a duplicate tab, you can open a blank tab (only one a time ;) ) and then paste the link
 - If a link/bookmark does a redirect, thus changing the tab url or scheme (i.e. http page redirecting to the same page served in https), it won't be matched


## To Do List

 - Whitelist url/domains to prevent automatic closing
 - Right click on a tab to mark it as "don't close"
 - Popup with last closed tabs
 - Option to switch to the new tab after opening it
 - Option to choose to close the new tab and switch to one of the already opened
 - Option
 - You ask :)


## Donations

This is developed during my free time so, if you are willing to offer me a beer and support this project, you are welcome and have my thanks :)
You can donate with PayPal in [eur](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D5GENHECQFG9W) or [usd](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=73ZJDZ9UAH2J8), or using bitcoins @ 39iyJpmhkc3ZC66CNMERcu9N4HA1fdMxtB .

<img src="resources/39iyJpmhkc3ZC66CNMERcu9N4HA1fdMxtB.png?raw=true" alt="bitcoin address" width="100" />

