const licenseDescriptions = {
  MIT: {
    description:
      "The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology (MIT). It is simple and easy to understand, allowing software to be freely used, modified, and shared. [Learn more](https://opensource.org/licenses/MIT)",
    benefits: [
      "Highly permissive and simple to understand.",
      "Allows almost unrestricted freedom to use, modify, and distribute the software.",
      "Only requires attribution to the original author.",
      "Compatible with many other licenses, including proprietary licenses."
    ],
    uses: [
      "Ideal for projects where you want maximum freedom for users.",
      "Commonly used in many open-source projects due to its simplicity and permissiveness.",
      "Suitable for both small and large projects, including commercial applications."
    ],
    cons: [
      "Does not provide strong copyleft, so derivative works can be made proprietary."
    ],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  "Apache 2.0": {
    description:
      "The Apache License 2.0 is a permissive license that allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license. [Learn more](https://www.apache.org/licenses/LICENSE-2.0)",
    benefits: [
      "Permissive like the MIT License but includes an explicit grant of patent rights.",
      "Provides more legal protection for contributors."
    ],
    uses: [
      "Suitable for projects where patent rights are a concern.",
      "Often used by large organizations and projects that want to ensure patent protection."
    ],
    cons: [
      "Does not provide strong copyleft, so derivative works can be made proprietary."
    ],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  "GPL 3.0": {
    description:
      "The GNU General Public License (GPL) is a free, copyleft license for software and other kinds of works. [Learn more](https://www.gnu.org/licenses/gpl-3.0.en.html)",
    benefits: [
      "Strong copyleft ensures that any derivative work must also be open-sourced under the same license.",
      "Promotes sharing and collaboration."
    ],
    uses: [
      "Ideal for projects that aim to ensure all derivative works remain open source.",
      "Common in projects that prioritize user freedom and collaboration."
    ],
    cons: [
      "May not be suitable for projects that want to allow proprietary derivative works."
    ],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  "BSD 3-Clause": {
    description:
      "The BSD 3-Clause License is a permissive license that has very few restrictions on how the software can be used. [Learn more](https://opensource.org/licenses/BSD-3-Clause)",
    benefits: [
      "Permissive like the MIT License but with a clause that prevents the use of the names of the project or its contributors for promotional purposes without permission."
    ],
    uses: [
      "Suitable for projects that want to allow wide usage and modification but with some restrictions on endorsements."
    ],
    cons: [
      "Does not provide strong copyleft, so derivative works can be made proprietary."
    ],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  "BSD 2-Clause": {
    description:
      "The BSD 2-Clause License is a permissive license that has very few restrictions on how the software can be used. [Learn more](https://opensource.org/licenses/BSD-2-Clause)",
    benefits: [
      "Similar to the BSD 3-Clause License but without the clause that prevents the use of the names of the project or its contributors for promotional purposes without permission."
    ],
    uses: [
      "Suitable for projects that want to allow wide usage and modification with minimal restrictions."
    ],
    cons: [
      "Does not provide strong copyleft, so derivative works can be made proprietary."
    ],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  "LGPL 3.0": {
    description:
      "The GNU Lesser General Public License (LGPL) is a free software license published by the Free Software Foundation (FSF). [Learn more](https://www.gnu.org/licenses/lgpl-3.0.en.html)",
    benefits: [
      "Allows linking with non-(L)GPLed code while ensuring that modifications to the LGPL-licensed code itself remain open source."
    ],
    uses: [
      "Ideal for libraries and projects that want to allow linking with proprietary code while keeping modifications to the library open source."
    ],
    cons: [
      "May not be suitable for projects that want to allow proprietary derivative works."
    ],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  "AGPL 3.0": {
    description:
      "The GNU Affero General Public License (AGPL) is a free, copyleft license for software and other kinds of works. [Learn more](https://www.gnu.org/licenses/agpl-3.0.en.html)",
    benefits: [
      "Ensures that any derivative work and modifications remain open source, even when used over a network."
    ],
    uses: [
      "Suitable for server-side software and web applications where you want to ensure that modifications remain open source."
    ],
    cons: [
      "May not be suitable for projects that want to allow proprietary derivative works."
    ],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  "MPL 2.0": {
    description:
      "The Mozilla Public License (MPL) is a free and open-source software license developed and maintained by the Mozilla Foundation. [Learn more](https://www.mozilla.org/en-US/MPL/2.0/)",
    benefits: [
      "Allows combining MPL-licensed code with other licenses, but changes to MPL-licensed files must be open-sourced."
    ],
    uses: [
      "Ideal for projects that want to ensure modifications to specific files remain open source while allowing broader use."
    ],
    cons: [
      "May not be suitable for projects that want to allow proprietary derivative works."
    ],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  "EPL 2.0": {
    description:
      "The Eclipse Public License (EPL) is an open-source software license used by the Eclipse Foundation. [Learn more](https://www.eclipse.org/legal/epl-2.0/)",
    benefits: [
      "Allows combining EPL-licensed code with other licenses, but changes to EPL-licensed files must be open-sourced."
    ],
    uses: [
      "Suitable for projects that want to ensure modifications to specific files remain open source while allowing broader use."
    ],
    cons: [
      "May not be suitable for projects that want to allow proprietary derivative works."
    ],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  Unlicense: {
    description:
      "The Unlicense is a public domain dedication tool that allows authors to disclaim copyright interest in their software. [Learn more](https://unlicense.org/)",
    benefits: [
      "Allows for maximum freedom with no restrictions on usage, modification, or distribution."
    ],
    uses: [
      "Ideal for projects where you want to dedicate your work to the public domain and allow anyone to use it for any purpose."
    ],
    cons: ["Does not provide any legal protection for the author."],
    deployability: ["Compatible with deployment in both the EU and US."]
  },
  None: {
    description: "",
    benefits: [],
    uses: [],
    cons: [],
    deployability: []
  }
};

export default licenseDescriptions;