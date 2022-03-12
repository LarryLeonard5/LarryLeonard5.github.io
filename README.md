# Leisure Cedar

## Running the development environment

Open a terminal and run the Vue UI

```
vue ui
```

This will open your browser to the Vue web application that is now running. If you need to manually open the web app use this link.

```
http://localhost:8001
```

### Running your web site for local development

Under the `Tasks`  section click on `Start Task`

Give 30 seconds or so to spin up the web site, you can observe the output of the server starting to run in the `Output` tab. When this is displayed the web site will be running.

```
 App running at:

  - Local:   http://localhost:8080/ 
  - Network: http://your-ip-address-here:8080/
```

You can open the application by clicking on `Open app` button on the `Dashboard` tab.

### Editing your content locally


By editing the `/src/data/data.ts` file and placing images into the folder `src/assets/images/` you can add/remove photos in any common format like .jpg, .png, .gif and others (if you can view it in your web browser it will be fine).
You can also update update the names and descriptions of products.

When doing so any changes made to the data.ts will be displayed on your website that is running locally at `http://localhost:8080/`

# Publishing your content

Once you are happy with how the site looks locally you need to publish those changes. To do so we're using a tool called `git` which is like a `FTP` with a bunch of extra stuff for versioning and managing software development. For your purposes we're just using `git` for a simple manner to push the contents of your website to a host so we can view it at your web address.

In order to do this you first need to commit the changes that you have made to your local repository. To do so you can use the git tools that are part of your `VS Code editor`. In the source control editor on the left it will indicate any files that you have changed or added to the applications project directory. You need to commit these changes. To  do so  press the `+` on each file so they are staged. Then type a message that describes the changes you made in the message text box at the top of the source control editor and press the little check mark to commit.

Now we just need to push or copy those changes to our web host at `github`. To do so click the sync changes button. You will now see the changes you made on the github website.

The final step is now to publish the changes you made by running a deploy task in the `Vue UI`. Go to the `Deploy Tab` and click `Run task`, wait for around 10 minutes as it builds and updates the website. You can view the progress on the output tab. When it is completed the Output will say something like this.

```
To github.com:LarryLeonard5/LarryLeonard5.github.io.git
 + 0ab3356...8483ca8 master -> gh-pages (forced update)

/Users/gunderwood/personal-workspace/leisurecedar-vue

Total task duration: 186.5s
```

At this point you should see all your updates on your web site at `https://leisurecedar.ca/`

## Development environment Setup on Windows 7

Install node [https://nodejs.org/en/download]

Install VSCode [https://code.visualstudio.com/download] 

Install Git [https://git-scm.com/download/win] 

Install Github Desktop [https://desktop.github.com] 

Open VS Code and open terminal

Install yarn

```
npm install -G yarn
```

Install Vue CLI
```
yarn global add @vue/cli
```

Run the Vue CLI
```
vue ui
```

Open your web browser to view the Vue CLI.

```
http://localhost:8001/
```

Import your project

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
