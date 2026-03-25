import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    updateVersionFiles();
}

function updateVersionFiles() {
    const folders = vscode.workspace.workspaceFolders;
    if (!folders) return;

    const version = vscode.version;
    const content =
        `# VS Code version used in this workspace\n` +
        `# Auto-updated by vscode-version-recorder extension\n` +
        `# Required for alwaysApply: true in init.prompt.md (VS Code 1.99+)\n` +
        `${version}\n`;

    for (const folder of folders) {
        const dir = path.join(folder.uri.fsPath, '.github');
        const file = path.join(dir, 'vscode-version.txt');

        if (!fs.existsSync(dir)) continue; // .github がないフォルダはスキップ
        fs.writeFileSync(file, content, 'utf8');
    }
}

export function deactivate() {}
