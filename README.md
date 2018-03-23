# tokylabsElectron

A simple electron project to allow Windows 10 to be compatible with create.tokylabs.com

Uses `webbluetooth` with `noble-uwp`. 

To compile : 

- On a fresh Windows 10 Fall Creators Update (1709)
- Install Node 8
- `npm install windows-build-tools -g`
- Install Windows 10 SDK 10.0.15063 (and only this version)
- `npm install electron-builder -g`

To test : 

- `npm rebuild --runtime=electron --target=1.7.1 --arch=x64 --rebuild --disturl=https://atom.io/download/electron --build_from_source=true`
- `electron .`

To build : 

- `electron-builder .` inside the repo
