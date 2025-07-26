# 🧠 BiteSpeed Chatbot Flow Builder

A **chatbot flow builder** built using **React**, **React Flow**, and **TypeScript**. This project allows users to create conversational flows visually by dragging, connecting, and configuring message nodes.

![Chatbot Builder Screenshot]

<img width="1913" height="852" alt="image" src="https://github.com/user-attachments/assets/561e76f7-7222-4f11-8144-d61613991642" />


---

## 🔗 Live Demo

👉 [Try it Live on Vercel](flow-builder-716oe0iy9-komalkiran085s-projects.vercel.app)

---

## ✨ Features

### ✅ Drag & Drop Node Panel
- A draggable **“Send Message”** node is available in the left panel.
- More node types can easily be added in future (designed with extensibility in mind).

### ✅ Flow Canvas
- Uses [`reactflow`](https://reactflow.dev/) to display and manage flow nodes and edges.
- Nodes can be positioned freely and connected using **edges**.
- Each node has:
  - **One Source Handle** (only one outgoing connection)
  - **One or more Target Handles** (can accept multiple incoming connections)

### ✅ Settings Panel
- Appears when a node is selected.
- Allows editing the node's message content.
- Replaces the Nodes Panel when visible.

### ✅ Save Flow Button
- Located at the top-right corner.
- Validates the flow on click:
  - If more than one node exists **and** more than one of them has **no outgoing edge**, it shows an error: `"Cannot save Flow"`.
  - Otherwise, shows a success banner: `"✅ Flow saved successfully"`.

### ⚡ Real-time Editing
- Updating a node's message immediately reflects in the node UI.
- Changes are managed through local React state.

---

## 📦 Tech Stack

- ⚛️ **React** with **TypeScript**
- 🎨 **TailwindCSS** for styling
- 🧩 **React Flow** for visual flow building
- 🔁 **uuid** for unique node IDs
- ☁️ **Vercel** for hosting

---

## 📸 Screenshots

### 🔧 Settings Panel on Node Selection
![Settings Panel](./screenshots/settings-panel.png)

### 🧩 Drag and Connect Nodes
![Flow Canvas](./screenshots/flow-builder.png)

### ❌ Validation Error
![Error Banner](./screenshots/error-banner.png)

---

## 🚀 Getting Started Locally

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/bitespeed-flow-builder.git
cd bitespeed-flow-builder

# 2. Install dependencies
npm install

# 3. Run the app
npm run dev
