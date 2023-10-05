To cancel a recent commit on the main branch in your local repository but keep that commit in your local history (i.e., not pushing it to the remote repository), you can use the following command:

```bash
# ##    git reset --soft HEAD~1 

:: after running this locally on your terminal this means commit you just did is reset and now run this command to reset this from the remote repo also

# ##      git push origin main --force

```

Here's what this command does:

- `git reset`: This command is used to reset the branch to a specific commit.
- `--soft`: This option tells Git to reset the branch but keep the changes from the canceled commit in your working directory. The changes will be staged and ready for you to commit again.
- `HEAD~1`: This specifies that you want to reset to the commit just before the most recent commit (`HEAD~1` means the commit one step back from the current `HEAD`).

After running this command, you'll have the changes from the canceled commit in your working directory, staged and ready to be committed again. The canceled commit will still be a part of your local commit history.

Make sure you are on the correct branch (main or any other branch) where you want to cancel the commit before running this command.

To ensure that the changes are reset on the remote repository as well, you'll need to force push the changes to the remote branch. However, please use caution when force pushing, especially on shared branches, as it can rewrite history and potentially cause conflicts for other collaborators. Here are the steps to reset the changes on the remote repository:

1. After running the `git reset --soft HEAD~1` command locally to cancel the recent commit while keeping the changes staged in your working directory, you can use the following command to force push the changes to the remote repository:

   ```bash
   git push origin main --force
   ```

   Replace `main` with the name of your branch if it's different.

2. If prompted, enter your GitHub (or other Git service) credentials to push the changes to the remote repository.

This will force push the changes to the remote repository, effectively resetting the remote branch to match your local branch, which has the canceled commit removed.

**Important:** Before using the `--force` option, make sure to communicate with your team and ensure that no one else is working on the same branch. Force pushing can disrupt other collaborators' work if they have already pulled the changes you're resetting.

Once the force push is complete, the remote repository should no longer have the recent commit, and your local and remote branches will be in sync with the canceled commit removed from the history.