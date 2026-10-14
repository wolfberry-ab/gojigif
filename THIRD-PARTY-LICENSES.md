# Third-party licences

GojiGif is proprietary software (see [LICENSE](LICENSE)). It is built on the
components listed here, which remain under their own licences and are
acknowledged as their licences require.

## Components distributed with GojiGif

| Component | Version | Licence | Project |
| --- | --- | --- | --- |
| Microsoft.Extensions.Configuration | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.Configuration.Abstractions | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.DependencyInjection | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.DependencyInjection.Abstractions | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.Diagnostics.Abstractions | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.FileProviders.Abstractions | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.Hosting.Abstractions | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.Logging | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.Logging.Abstractions | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.Logging.Debug | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.Options | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Extensions.Primitives | 10.0.0 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Maui.Controls.Core | 10.0.20 | [MIT](https://opensource.org/licenses/MIT) | [link](https://github.com/dotnet/maui) |
| Microsoft.Maui.Controls.Xaml | 10.0.20 | [MIT](https://opensource.org/licenses/MIT) | [link](https://github.com/dotnet/maui) |
| Microsoft.Maui.Core | 10.0.20 | [MIT](https://opensource.org/licenses/MIT) | [link](https://github.com/dotnet/maui) |
| Microsoft.Maui.Essentials | 10.0.20 | [MIT](https://opensource.org/licenses/MIT) | [link](https://github.com/dotnet/maui) |
| Microsoft.Maui.Graphics | 10.0.20 | [MIT](https://opensource.org/licenses/MIT) | [link](https://github.com/dotnet/maui) |

## Build-time only

These run on the build machine and are not redistributed, so they carry no
attribution obligation; they are listed for completeness.

| Component | Version | Licence | Project |
| --- | --- | --- | --- |
| Microsoft.DotNet.ILCompiler | 10.0.5 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |
| Microsoft.Maui.Controls | 10.0.20 | [MIT](https://opensource.org/licenses/MIT) | [link](https://github.com/dotnet/maui) |
| Microsoft.Maui.Controls.Build.Tasks | 10.0.20 | [MIT](https://opensource.org/licenses/MIT) | [link](https://github.com/dotnet/maui) |
| Microsoft.Maui.Resizetizer | 10.0.20 | [MIT](https://opensource.org/licenses/MIT) | [link](https://github.com/dotnet/maui) |
| Microsoft.NET.ILLink.Tasks | 10.0.5 | [MIT](https://opensource.org/licenses/MIT) | [link](https://dot.net/) |

## Runtime and platform frameworks

These are not NuGet packages, so they do not appear in the tables above.

* **.NET runtime and base class libraries** (Microsoft, MIT) — redistributed
  inside GojiGif.app and alongside GojiGif.exe as part of the self-contained
  build. <https://github.com/dotnet/runtime/blob/main/LICENSE.TXT>
* **Operating-system frameworks** — Apple's ScreenCaptureKit, Core Image, ImageIO
  and UIKit on macOS; Windows.Graphics.Capture and the Windows Imaging Component
  on Windows. Called under the platform SDK terms and not redistributed.
