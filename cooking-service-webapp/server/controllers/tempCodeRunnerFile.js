      const isPasswordValid = await bcrypt.compare(password, user.password);
