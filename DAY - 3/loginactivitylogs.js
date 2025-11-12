// You are given an array of login activity logs:

// [
//   { userId: 301, device: "mobile",     location: "Chennai",  ts: "2025-03-01T06:20:00Z" },
//   { userId: 301, device: "desktop",    location: "Chennai",  ts: "2025-03-01T10:10:00Z" },
//   { userId: 302, device: "mobile",     location: "Mumbai",   ts: "2025-03-02T09:00:00Z" },
//   { userId: 301, device: "mobile",     location: "Bangalore", ts: "2025-03-03T12:30:00Z" },
//   { userId: 302, device: "desktop",    location: "Mumbai",   ts: "2025-03-04T08:15:00Z" }
// ]
// Return a summary grouped by userId.
// Expected Output:

// [
//   {
//     userId: 302,
//     totalLogins: 2,
//     uniqueDevices: ["mobile", "desktop"],
//     uniqueLocations: ["Mumbai"],
//     lastLoginAt: "2025-03-04T08:15:00Z"
//   },
//   {
//     userId: 301,
//     totalLogins: 3,
//     uniqueDevices: ["mobile", "desktop"],
//     uniqueLocations: ["Chennai", "Bangalore"],
//     lastLoginAt: "2025-03-03T12:30:00Z"
//   }
// ]
// Sorted by lastLoginAt descending.

const logs =
[
  { userId: 301, device: "mobile",     location: "Chennai",  ts: "2025-03-01T06:20:00Z" },
  { userId: 301, device: "desktop",    location: "Chennai",  ts: "2025-03-01T10:10:00Z" },
  { userId: 302, device: "mobile",     location: "Mumbai",   ts: "2025-03-02T09:00:00Z" },
  { userId: 301, device: "mobile",     location: "Bangalore", ts: "2025-03-03T12:30:00Z" },
  { userId: 302, device: "desktop",    location: "Mumbai",   ts: "2025-03-04T08:15:00Z" }
]

function summarizeLogins(logs) {
    if (!logs || logs.length < 1) {
        return "Error: Empty Array";
    }
    const userSummaries = {};
    const userIds = [];

    for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        const userId = log.userId;

        if (!userSummaries[userId]) {
            userSummaries[userId] = {
                totalLogins: 0,
                uniqueDevices: [],
                uniqueLocations: [],
                lastLoginAt: log.ts
            };
            
            userIds[userIds.length] = userId;
        }
        userSummaries[userId].totalLogins++;
        
        let deviceExists = false
        
        for (let checkIndex = 0; checkIndex < userSummaries[userId].uniqueDevices.length; checkIndex++) {
            if (userSummaries[userId].uniqueDevices[checkIndex].toLowerCase() === log.device.toLowerCase()) {
                deviceExists = true;
            }
        }
        if (deviceExists === false) {
            userSummaries[userId].uniqueDevices[userSummaries[userId].uniqueDevices.length] = log.device.toLowerCase();
        }
        
        let locationExists = false;
        for (let checkIndex = 0; checkIndex < userSummaries[userId].uniqueLocations.length; checkIndex++) {
            if (userSummaries[userId].uniqueLocations[checkIndex].toLowerCase() === log.location.toLowerCase()) {
                locationExists = true;
            }
        }
        if (locationExists === false) {
            userSummaries[userId].uniqueLocations[userSummaries[userId].uniqueLocations.length] = log.location.toLowerCase();
        }
        
        if (log.ts > userSummaries[userId].lastLoginAt) {
            userSummaries[userId].lastLoginAt = log.ts;
        }
    }
    const summaries = [];
    let summaryIndex = 0;
    for (let i = 0; i < userIds.length; i++) {
        const userId = userIds[i];
        summaries[summaryIndex++] = {
            userId: userId,
            totalLogins: userSummaries[userId].totalLogins,
            uniqueDevices: userSummaries[userId].uniqueDevices,
            uniqueLocations: userSummaries[userId].uniqueLocations,
            lastLoginAt: userSummaries[userId].lastLoginAt
        };
    }

    for (let i = 0; i < summaries.length - 1; i++) {
        for (let j = i + 1; j < summaries.length; j++) {
            if (summaries[i].lastLoginAt < summaries[j].lastLoginAt) {
                const temp = summaries[i];
                summaries[i] = summaries[j];
                summaries[j] = temp;
            }
        }
    }
    return summaries;
}
     
const result = summarizeLogins(logs);
console.log("Output:", result);