# rush-repro-package-version-issue
rush-repro-package-version-issue

Is it possible with rush/pnpm (and the magic) to have multiple versions of react in one monorepo?
I have two seemingly unrelated packages in one rush-managed repo. They aren't dependent on each other. But, it seems that the module resolving algorithm resolves to the wrong version.

I've created a repro repo: https://github.com/alber70g/rush-repro-package-version-issue

I have an app and a lib. Both unrelated, just in the same repo. They share the temp/common directory with packages. After a rush install and rush build I'm unable to run the reactv18-cli project (./dist/cli.js) and get the error about hooks




https://github.com/alber70g/rush-repro-package-version-issue/assets/516972/2755dcb0-90ad-473f-95ec-027fc5a4b414

_Press pause between frames, as I've used an ffmpeg script to reduce it's size and make it fast when nothing's moving_

_ffmpeg -i input.mov -vf "mpdecimate=hi=64*12:lo=64*5:frac=0.33,setpts=N/FRAME_RATE/TB" -map 0:v output.mp4_
