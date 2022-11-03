const express = require("express");

const { usersOnline } = require("../chronons/resourcesChronons");
const { error, log, info, good } = require("../utils/chalk");

// driver
// const {}

// auth
const { verifyBearer } = require("../utils/secure");

const load = require("../utils/loading");

const router = express.Router();

router.get("/fetch-all-tech", async (req, res) => {
  if (req.headers.authorization) {
    if (req.headers.authorization.indexOf("Bearer ") === 0) {
      const verified = verifyBearer(req.headers.authorization);
      if (verified) {
        const { nation } = req.query;
        
      }
    }
  }
  res.send({ status: 403, data: { error: "unauthorized" } });
});

router.get("/fetch-buildings", async (req, res) => {
  if (req.headers.authorization) {
    if (req.headers.authorization.indexOf("Bearer ") === 0) {
      const verified = verifyBearer(req.headers.authorization);
      if (verified) {
        const { nation } = req.query;
      }
    }
  }
  res.send({ status: 403, data: { error: "unauthorized" } });
});

router.get("/fetch-technologies", async (req, res) => {
  if (req.headers.authorization) {
    if (req.headers.authorization.indexOf("Bearer ") === 0) {
      const verified = verifyBearer(req.headers.authorization);
      if (verified) {
        const { nation } = req.query;
      }
    }
  }
  res.send({ status: 403, data: { error: "unauthorized" } });
});

router.get("/fetch-units", async (req, res) => {
  if (req.headers.authorization) {
    if (req.headers.authorization.indexOf("Bearer ") === 0) {
      const verified = verifyBearer(req.headers.authorization);
      if (verified) {
        const { nation } = req.query;
      }
    }
  }
  res.send({ status: 403, data: { error: "unauthorized" } });
});

router.get("/fetch-heros", async (req, res) => {
  if (req.headers.authorization) {
    if (req.headers.authorization.indexOf("Bearer ") === 0) {
      const verified = verifyBearer(req.headers.authorization);
      if (verified) {
        const { nation } = req.query;
      }
    }
  }
  res.send({ status: 403, data: { error: "unauthorized" } });
});

router.post("/user-make", async (req, res) => {
  if (req.headers.authorization) {
    if (req.headers.authorization.indexOf("Bearer ") === 0) {
      const verified = verifyBearer(req.headers.authorization);
      if (verified) {
        const { techId } = req.body;
      }
    }
  }
  res.send({ status: 403, data: { error: "unauthorized" } });
});

module.exports = router;
