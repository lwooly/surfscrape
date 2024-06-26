import { surfCheck } from "../../../tasks/notify/surfCheck.js";

export const runCronTasks = async (req, res) => {
  console.log("Running CRON");

  try {
    await surfCheck();

    console.log("Cron task run successfully");
    res.status(200).send('Cron task ran successfully')

  } catch (err) {
    console.error("Error running Cron task");
    res.status(500).json({ error: "Internal server error" })
  }
};
