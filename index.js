const fetch = require("node-fetch");
const readlineSync = require("readline-sync");
const cheerio = require("cheerio");
const randstr = (length) =>
  new Promise((resolve, reject) => {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    resolve(text);
  });
const functionGetLink = (email, name, domain) =>
  new Promise((resolve, reject) => {
    fetch(`https://generator.email/inbox1`, {
      method: "get",
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        "accept-encoding": "gzip, deflate, br",
        cookie: `_ga=GA1.2.659238676.1567004853; _gid=GA1.2.273162863.1569757277; embx=%5B%22${name}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=io=tIcarRGNgwqgtn40O${randstr(
          3
        )}; surl=${domain}%2F${name}`,
        "upgrade-insecure-requests": 1,
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
      },
    })
      .then((res) => res.text())
      .then((text) => {
        const $ = cheerio.load(text);
        const src = $(
          "#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > table > tbody > tr > td > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > p"
        ).text();
        resolve(src);
      })
      .catch((err) => reject(err));
  });

const IP = () =>
  new Promise((resolve, reject) => {
    fetch("https://api.ipify.org/", {
      method: "GET",
    })
      .then((res) => res.text())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const cek = (domain, email) =>
  new Promise((resolve, reject) => {
    fetch(`https://generator.email/inbox1`, {
      method: "get",
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3",
        "accept-encoding": "gzip, deflate, br",
        cookie: `_ga=GA1.2.659238676.1567004853; _gid=GA1.2.273162863.1569757277; embx=%5B%22${email}%40${domain}%22%2C%22hcycl%40nongzaa.tk%22%5D; _gat=1; io=io=tIcarRGNgwqgtn40O${randstr(
          3
        )}; surl=${domain}%2F${email}`,
        "upgrade-insecure-requests": 1,
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const generateIndoName = () =>
  new Promise((resolve, reject) => {
    fetch("https://swappery.site/data.php?qty=1", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
const getRegist = (email, nama, IPcon,reff) =>
  new Promise((resolve, reject) => {
    fetch("https://id.vscore.vn/api-v1/accounts/register/4", {
      method: "POST",
      headers: {
        accept: "application/json, text/plain, */*",
        "x-ip-address": IPcon,
        "x-user-agent":
          "Mozilla/5.0 (Linux; Android 7.1.2; note 7 Build/N2G48H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.70 Mobile Safari/537.36",
        "x-location": "",
        "x-culture-code": "EN",
        "Content-Type": "application/json;charset=utf-8",
        "Content-Length": "136",
        Host: "id.vscore.vn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.12.1",
      },
      redirect: "manual",
      body: JSON.stringify({
        userName: email,
        password: "Kaserinas123@",
        rePassword: "Kaserinas123@",
        fromReferralId: reff,
        fullName: nama,
      }),
    })
      .then((res) => res.json())
      .then((ress) => {
        resolve(ress);
      })
      .catch((err) => {
        reject(err);
      });
  });
const Otp = (token, otpa, IPcon) =>
  new Promise((resolve, reject) => {
    fetch("https://id.vscore.vn/api-v1/tokens/verify-otp", {
      method: "POST",
      headers: {
        accept: "application/json, text/plain, */*",
        "x-ip-address": IPcon,
        "x-user-agent":
          "Mozilla/5.0 (Linux; Android 7.1.2; note 7 Build/N2G48H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/68.0.3440.70 Mobile Safari/537.36",
        "x-location": "",
        "x-culture-code": "EN",
        "Content-Type": "application/json;charset=utf-8",
        "Content-Length": "136",
        Host: "id.vscore.vn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.12.1",
      },
      body: JSON.stringify({
        validateToken: token,
        otp: otpa,
        otpType: 1,
      }),
    })
      .then((res) => res.json())
      .then((ress) => {
        resolve(ress);
      })
      .catch((err) => {
        reject(err);
      });
  });
(async () => {
  while (true) {
    try {
      const reff = "TR6V1BD4"
      const domain = "smilevxer.com";
      const indoName = await generateIndoName();
      const rand = await randstr(4);
      const { result } = indoName;
      const name =
        result[0].firstname.toLowerCase() +
        result[0].lastname.toLowerCase() +
        rand;
      const email = `${name}@${domain}`;
      console.log("[+] Mendaftar dengan email " + email);
      const IPcon = await IP();
      console.log("[=] IP " + IPcon);
      const Prosesregist = await getRegist(email, name, IPcon, reff);
      if (Prosesregist.success === true) {
        const tokenreg = Prosesregist.data.token;
        // let linkConfirm;
        let count = 0;
        do {
          linkConfirm = await functionGetLink(
            email,
            email.split("@")[0],
            email.split("@")[1]
          );
          count ++;
          // console.log(count)
        } while (count < 10);
        const otp = linkConfirm;
        const validateOtp = await Otp(tokenreg, otp, IPcon);
        if (validateOtp.success === true) {
          console.log("[+] Berhasil mendaftar");
        } else {
          console.log(validateOtp.message);
        }
      } else {
        console.log("[=] Ada kesalahan ");
      }
    } catch (error) {
      console.log("[+] Timeout");
    }
  }
})();
