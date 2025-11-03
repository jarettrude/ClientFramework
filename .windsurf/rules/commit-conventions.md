---
trigger: always_on
---

# Git Commit Message Conventions

Based on analysis of commit history across all repositories in this project.

## Commit Message Format

### Structure
```
<type>: <subject>

[optional body]

[optional footer]
```

### Types Observed

1. **Feature/Enhancement** - No prefix, imperative mood
   - Examples: `Add invite`, `Add sidebar logo`, `Add toast to for mfa email`
   
2. **Fix** - Prefix with "Fix" or reference issue
   - Examples: `Fix paths`, `Fix #24`, `fix redirect on home`, `Fix oauth endpoint logic`
   
3. **Update** - Prefix with "Update"
   - Examples: `Update NPM`, `Update refs and zod2gql`, `Update logic for Next15`
   
4. **Merge** - Auto-generated merge commits
   - Examples: `Merge pull request #54 from...`, `Merge branch 'main'`
   
5. **Refactor/Clean** - Descriptive action
   - Examples: `Clean up console logs`, `Prettier and lint fix`, `clean up`
   
6. **Version** - Semantic version number only
   - Examples: `0.0.195`, `0.0.1`
   
7. **Documentation** - Prefix with "Update" or specific action
   - Examples: `Update README`, `Update docs`, `Add comments`

### Style Guidelines

1. **Capitalization**: 
   - First word is capitalized for major changes
   - Lowercase for minor fixes and updates
   - Examples: `Fix paths` vs `fix redirect on home`

2. **Punctuation**:
   - End with semicolon for major updates: `Update auth ref;`, `Fix routing;`
   - No period at end for most commits
   - Use hyphen for issue references: `fix for auth-12`

3. **Tense**: 
   - Imperative mood (command form): "Add", "Fix", "Update", "Remove"
   - NOT past tense: ~~"Added"~~, ~~"Fixed"~~

4. **Length**:
   - Keep subject line concise (typically under 72 characters)
   - No body text in most commits

5. **Issue References**:
   - Format: `Fix #<number>` or `fix #<number>`
   - Can also use: `- fix #<number>` in description
   - Examples: `Fix #24`, `storybook implemented - fix #42`

### Common Patterns

**Dependencies:**
- `Bump <package> in the npm_and_yarn group across 1 directory`
- `Update packages`

**Pull Requests:**
- Auto-generated: `Merge pull request #<number> from <branch>`
- Manual: `Dev (#77)`

**Multi-word subjects:**
- Use spaces, not underscores or hyphens
- Examples: `Add user management to sidebar`, `fix login infinite loop problem`

**Scope indicators:**
- Sometimes included in subject: `Update message;`, `Update logic;`
- No formal scope syntax like `feat(scope):` observed

### Examples by Category

**Adding Features:**
```
Add invite
Add sidebar logo
Add toast to for mfa email
Add user management to sidebar
```

**Fixing Issues:**
```
Fix paths
Fix #24
fix redirect on home
Fix oauth endpoint logic
fix login infinite loop problem
```

**Updates:**
```
Update NPM
Update refs and zod2gql
Update logic for Next15
Update README
```

**Refactoring:**
```
Clean up console logs
Prettier and lint fix
clean up
```

**Versioning:**
```
0.0.195
0.0.1
```

## Best Practices for This Project

1. Use imperative mood (Add, Fix, Update, Remove)
2. Capitalize first word for significant changes
3. Use lowercase for minor fixes
4. Reference issues with `Fix #<number>` or `- fix #<number>`
5. End major updates with semicolon
6. Keep it concise and descriptive
7. No need for conventional commit prefixes (feat:, fix:, etc.)
8. Merge commits are auto-generated, don't modify them
