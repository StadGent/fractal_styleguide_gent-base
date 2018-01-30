#!/bin/bash

#===============================================================================
#
#          FILE:  version_tag.sh
#
#         USAGE:  ./version_tag.sh --type=patch
#                 ./version_tag.sh --type=minor
#                 ./version_tag.sh --type=major
#
#   DESCRIPTION:  ONLY USABLE FOR DIGIPOLIS EMPLOYEES!
#                 This script automatically pulls in the latest origin/develop into your local development branch,
#                 updates the version number based on the --type parameter and merges the development branch in the
#                 master branch before tagging and pushing to git. Jenkins does the rest.
#
#       OPTIONS:  --type
#  REQUIREMENTS:  ---
#          BUGS:  ---
#         NOTES:  ---
#        AUTHOR:  Gert-Jan Meire, gertjan.meire@digipolis.gent
#       COMPANY:  Digipolis Gent
#       VERSION:  1.0
#       CREATED:  12/12/2017
#      REVISION:  ---
#===============================================================================

# Check if git is installed on your system.
if ! [ -x "$(command -v git)" ]; then
  echo 'Error: git is not installed.' >&2
  exit 1
fi

# Get latest changes in git.
echo "Checking out latest development changes...";
git checkout develop;
git pull;

# Check if gulp validates, otherwise terminate the script.
gulp validate

# Check output of gulp validate command.
if [ $? -eq 0 ]
then
    echo "Code validation successful!"
else
    echo "You need to make sure your code validates before continuing!"
    exit 1
fi

# Do a gulp build to build latest version of the style guide.
#echo "Building latest style guide version...";
gulp build

# Check if type argument is not empty.
if [ $# -eq 0 ]
  then
    echo "No arguments supplied. Please provide a type parameter like -t=patch."
    exit 1
fi

# Checking for type argument.
for i in "$@"
  do
    case $i in
      -t=*|--type=*)
      TYPE="${i#*=}"
      shift # past argument=value
      ;;
    esac
done

# Update the version based on the argument given (patch, minor, major) using our gulp bump command.
echo "Updating version...";
gulp bump --type=$TYPE

# Get the new package version.
PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

echo $PACKAGE_VERSION

# Add everything to git.
echo "Adding changes to git and tagging "$PACKAGE_VERSION
git add .
git commit -m "Updated to version "$PACKAGE_VERSION
echo "Checking out master branch... and pushing develop in master..."
git checkout master
git pull
git merge develop
git tag $PACKAGE_VERSION

# Deploy to git.
echo "Pushing master and develop branches to remote..."
git push origin master && git push origin develop && git push --tags
echo "Finished! Pushed tags will be deployed automatically."
