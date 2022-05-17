import axios from "axios";
import fs from 'fs';
import https from 'https';

async function main() {
    await new Promise((resolve, reject) => {
        https.get('https://uc5a569414c0cecc53a4efdae921.dl.dropboxusercontent.com/cd/0/get/BldSJwOa2Vka8qZnycI3FYMKVtrGudixBgCzdl_s30mcH_nKhRXjRy4ySvl41LvyyrQO9Z2y20gqzaw6KrIGxFe5bCTwImABq1DrbOBgo1I2RWqYJnrMNCBqaHtRayGPM0nmSpT4MT5Fu1YcZm_cIh27yXa44Y0DyawuwgrpeCIAsgfKBbsaY7lKPMCbiUBefgA/file', (res) => {
            const stream = fs.createWriteStream(`${process.env.HOME}/Downloads/go-api.mp4`, { encoding: 'binary' });
            res.pipe(stream, { end: true });

            stream.on('pipe', console.log);

            stream.once('error', reject);
            stream.once('finish', console.log.bind(null, 'finish'));
            stream.once('close', resolve)
        });
    });

    // fs.writeFileSync(`${process.env.HOME}/Downloads/go-2.mp4`, res.data, 'binary');

    console.log('finish');
};












(async () => {
    try {
        await main();
    } catch (error) {
        console.error('=== ERROR ===');
        console.error(error);
        console.error('=== ERROR ===');
    } finally {
        process.exit(0);
    }
})();
