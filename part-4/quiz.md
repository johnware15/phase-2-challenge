- When you run a command in the terminal, where does BASH look for that command?
    * User's PATH directory

- On a UNIX computer, how do you stop a running process?
    * <CTRL><C>

- What packages do you have installed via homebrew?
    $ brew list
    * gdbm		openssl		postgresql	zsh
    * mysql		pcre		readline	zsh-completions

    $ brew cask list
    * google-drive
    * postico

- On a UNIX computer, how do you find the process id of a running process?
    * ps
    * kill <process-number>

- In a terminal, what does control-c do?
    * Kills a process

- What would be the result of typing the following commands?
```sh
$ cd /Users/steve = cd: no such file or directory: /User/steve
$ mkdir foo = new directory created "foo"
$ touch bar = new text document called "bar"
$ cd foo = accesses directory "foo"
$ touch bar = creates text file inside of "foo" labeled "bar"
$ pwd = '/Users/johnware/foo'
```
- How do you set an environment variable in your shell?
   * env myVar="Value"

- What keyboard shortcut do you use to split the screen in your editor?
   * <command-k> + <arrow key>

- How do you create an alias in your shell?
   1. gedit ~/.bashrc
   2. add 'alias'
   3. execute '. ~/.bashrc'

- When a terminal command completes, how can you tell if it was successful or not?
   * When there is no message. The terminal returns to its previous prompt.

- What does your `~/.gitconfig` have in it? (paste the whole file here)
  ```
   [alias]
  co = checkout
  ci = commit
  st = status --short --branch
  l  = log --oneline --decorate --graph --relative-date --show-signature
  ls-untracked-files = !git-ls-files -o --exclude-standard
  ls-ignored-files = !git-ls-files --others -i --exclude-standard
  ls-modified-files = !git-ls-files -m
[color]
  status = auto
  diff = auto
  branch = auto
  interactive = auto
  ui = auto
  pager = true
[color "status"]
  added = green
  changed = yellow
  untracked = red
[user]
  name = YOUR NAME HERE
  email = YOUR EMAIL ADDRESS HERE
[core]
  excludesfile = ~/.gitignore
  autocrlf = false
  pager = less -F -X
  whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eol
[apply]
  whitespace = fix
[push]
  default = upstream
[branch]
  autosetuprebase = always
  autosetupmerge = true
[mergetool "diffmerge"]
  cmd = diffmerge --merge --result=$MERGED $LOCAL $BASE $REMOTE
  trustExitCode = false
[rebase]
  autosquash = true
[rerere]
  enabled = true
  autoupdate = true
[help]
  autocorrect = 50
```

- What is the difference between a relative and absolute path?
   * Absolute: path starting from the root directory
   * Relative: path starting from current directory

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── pinterest-for-dogs
      │   └── package.json
      └── linkedin-for-dancers
          ├── README.md
          └── package.json
  ```

  And you were in the `linkedin-for-dancers` folder. What command would you use to copy the `README.md` file to the `pinterest-for-dogs` folder?
   * mv -i ~/README.md ~/pinterest-for-dogs/README.md

- What keyboard shortcut do you use, in your editor, to go to a file in the project you have open?
   * command-O

- What files or folders do you want all git repositories to ignore?
   * node_modules and DS_Store

- What is the main difference between `Array.map` and `Array.forEach` in JavaScript?
   * `Array.map` = creates new array from the results of the function once called
   * `Array.forEach` does not execute the function
