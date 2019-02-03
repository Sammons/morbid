#!/bin/sh
set -ev
BRANCH="$(git rev-parse --abbrev-ref HEAD)";

if [ "$BRANCH" = "master" ]; then
  echo bumping version
  node travis-scripts/increment-package-version.js
  echo on branch master
  git add coverage;
  git add package.json;
  git status;
  echo $gpg_private > gpg_private.pem
  echo $gpg_public > gpg_public.pem
  echo $rsa_private > rsa_private.pem
  gpg --import --passphrase $gpg_pass gpg_private.pem
  gpg --import gpg_public.pem
  git config --global user.signingkey 0F2911F3E9978A33
  GIT_SSH_COMMAND="ssh -i travis-scripts/rsa_private.pem" git commit -m "travis updating coverage, version [ci skip]"
fi;

