import React from "react";

const commands = require("@site/static/commands.json");

export default function CommandTable({ category }) {
  const categoryCommands = commands[category] || [];

  return (
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Description</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        {categoryCommands.map((command) => (
          <tr key={command.name}>
            <td>{command.name}</td>
            <td>{command.description}</td>
            <td>{command.usage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
