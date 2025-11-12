// You are given an array of order records:

// [
//   { orderId: "o1", customerId: 201, items: 3, total: 450.00, status: "completed", ts: "2025-05-01T10:00:00Z" },
//   { orderId: "o2", customerId: 202, items: 1, total: 120.00, status: "pending",   ts: "2025-05-02T12:30:00Z" },
//   { orderId: "o3", customerId: 201, items: 2, total: 230.00, status: "completed", ts: "2025-05-03T08:45:00Z" },
//   { orderId: "o4", customerId: 202, items: 5, total: 980.00, status: "completed", ts: "2025-05-04T15:00:00Z" }
// ]
// Return a summary grouped by customerId.
// Expected Output:

// [
//   {
//     customerId: 202,
//     totalSpent: 1100,
//     ordersCount: 2,
//     completedOrders: 1,
//     lastOrderAt: "2025-05-04T15:00:00Z"
//   },
//   {
//     customerId: 201,
//     totalSpent: 680,
//     ordersCount: 2,
//     completedOrders: 2,
//     lastOrderAt: "2025-05-03T08:45:00Z"
//   }
// ]
// Sorted by totalSpent descending.

const orders = 
[
  { orderId: "o1", customerId: 201, items: 3, total: 450.00, status: "completed", ts: "2025-05-01T10:00:00Z" },
  { orderId: "o2", customerId: 202, items: 1, total: 120.00, status: "pending",   ts: "2025-05-02T12:30:00Z" },
  { orderId: "o3", customerId: 201, items: 2, total: 230.00, status: "completed", ts: "2025-05-03T08:45:00Z" },
  { orderId: "o4", customerId: 202, items: 5, total: 980.00, status: "completed", ts: "2025-05-04T15:00:00Z" }
]

function summarizeOrders(orders) {
    if (!orders || orders.length === 0) {
        return "Error: Empty Array"
    }
    const customerSummaries = {};
    const customerIds = [];

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const customerId = order.customerId;

        if (!customerSummaries[customerId]) {
            customerSummaries[customerId] = {
                totalSpent: 0,
                ordersCount: 0,
                completedOrders: 0,
                lastOrderAt: order.ts
            };

            customerIds[customerIds.length] = customerId;
        }

        customerSummaries[customerId].totalSpent += order.total;
        customerSummaries[customerId].ordersCount++;

        if (order.status.toLowerCase() === "completed") {
            customerSummaries[customerId].completedOrders++;
        }

        if (order.ts > customerSummaries[customerId].lastOrderAt) {
            customerSummaries[customerId].lastOrderAt = order.ts;
        }
    }

    const summaries = [];
    let summaryIndex = 0;

    for (let i = 0; i < customerIds.length; i++) {
        const customerId = customerIds[i];
        summaries[summaryIndex++] = {
            customerId: customerId,
            totalSpent: customerSummaries[customerId].totalSpent,
            ordersCount: customerSummaries[customerId].ordersCount,
            completedOrders: customerSummaries[customerId].completedOrders,
            lastOrderAt: customerSummaries[customerId].lastOrderAt
        };
    }

    for (let i = 0; i < summaries.length - 1; i++) {
        for (let j = i + 1; j < summaries.length; j++) {
            if (summaries[i].totalSpent < summaries[j].totalSpent) {
                const temp = summaries[i];
                summaries[i] = summaries[j];
                summaries[j] = temp;
            }
        }
    }
    return summaries;
}

const result = summarizeOrders(orders);
console.log("Output:", result);